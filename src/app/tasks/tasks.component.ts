import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
import {Task} from "../model/Task";

export enum Status {
  'Not_Started' = "Not Started",
  'In_Progress' = "In Progress",
  'In_Review' = "In Review",
  'Completed' = "Completed",
  'Cancelled' = "Cancelled"

};


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  selectedStatus = '';
  model: NgbDateStruct | undefined;

  onSelected(value: string){
    this.selectedStatus = value;
  }

  tasks: Task [] = [
    {name: "Product Research", description: "Try understand how the product works", dueDate: "Aug 2022", status: Status.In_Progress}
  ];

  addNew(task:any){
  this.tasks.push(task);
  console.log("New Task "+ task);
  }

  updateTask(position: number){
  //this.tasks.indexOf(position)
  }

  deleteTask(position:number){
    this.tasks.splice(position, 1);
    console.log("Task Deleted ");
  }

  deleteAll(){
  this.tasks.splice(0, this.tasks.length);
  console.log("All tasks deleted "+ this.tasks.length);
  }

  viewAll(){
    this.tasks.forEach(function (task){
      console.log(task);
    })
    console.log("All tasks viewed "+ this.tasks.length);
  }

  viewSingle(){

  }
}
