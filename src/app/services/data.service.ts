import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Item} from "../model/Task";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  itemUrl = 'http://localhost:8080/task';

  findItemById(id:number):Observable<Item> {
    return this.http.get<Item>(`${this.itemUrl}/${id}`);
  }

  findAllItems():Observable<Item[]>{
      return this.http.get<Item[]>(`${this.itemUrl}`);
  }

  addItem(item: Item): Observable<any>{
    return this.http.post<Item>(this.itemUrl, item);
  }

  updateItemById(item: Item, id: number): Observable<any>{
    return this.http.put<Item>(`${this.itemUrl}/${id}`,item);
  }

  deleteItemById(id: number): Observable<any>{
    return this.http.delete(`${this.itemUrl}/${id}`)
  }
}
