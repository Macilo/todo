import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
import {Item} from "../model/Task";
import {DataService} from "../services/data.service";
import {FormBuilder, Validators} from "@angular/forms";

export interface Status {
  description?: string
  // 'Not_Started' = "Not Started",
  // 'In_Progress' = "In Progress",
  // 'In_Review' = "In Review",
  // 'Completed' = "Completed",
  // 'Cancelled' = "Cancelled"

}


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {

  constructor(private dataService: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.viewAll();
  }

  todoForm = this.fb.group({
    name: ["", Validators.required],
    description: [""],
    dueDate: [new Date()]
  })

  todolist: Item[]=[];

  onSubmit(){
    this.todolist.push(<Item>this.todoForm.value);
  }

  selectedStatus = '';
  model: NgbDateStruct | undefined;

  onSelected(value: any){
    this.selectedStatus = value;
  }

  tasks: Item[] = [];

  addNew(task:any){
    this.dataService.addItem(task).subscribe(response => {
      console.log("New Task "+ response);
    })
  // this.tasks.push(task);
  //console.log("New Task "+ task);
  }

  updateTask(item: Item, id: number){
    this.dataService.updateItemById(item, id).subscribe(response => {
      if(response.id == id){
        item = response;
        console.log("IN update doll" + item.name);
      }
    })
  }

  deleteTask(id:any){
    this.dataService.deleteItemById(id).subscribe(response => {
      console.log("Task Deleted " + response.id);
    })
  }

  deleteAll(){
  // this.tasks.splice(0, this.tasks.length);
  // console.log("All tasks deleted "+ this.tasks.length);
  }

  viewAll() {
    this.dataService.findAllItems().subscribe(response => {
      if(response.length !== 0){
        this.tasks = response;
      }
      response.forEach(task =>
        console.log("All tasks " + task.id +" " + task.name + " "+ task.description+ " "+ task.dueDate + " "+ task.status?.description));
    })

  }

}
