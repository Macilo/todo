import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  taskUrl = `/api/task`

  findTaskById(id:number):Observable<Task> {
    return this.http.get<Task>(`${this.taskUrl}/${id}`);
  }

  findAllTasks():Observable<Task[]>{
      return this.http.get<Task[]>(`${this.taskUrl}`);
  }

  addTask(task: Task): Observable<any>{
    return this.http.post<Task>(this.taskUrl, task);
  }

  updateTaskById(task: Task, id: number): Observable<any>{
    return this.http.put<Task>(`${this.taskUrl}/${id}`,task);
  }

  deleteTaskById(id: number): Observable<any>{
    return this.http.delete(`${this.taskUrl}/${id}`)
  }
}
