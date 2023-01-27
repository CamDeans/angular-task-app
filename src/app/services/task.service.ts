import { Injectable } from '@angular/core';
// create HttpClient, HttpHeaders from @angular/commom/http
import { HttpClient, HttpHeaders } from '@angular/common/http';
// create an import for observable type when not dealing wiht files
import { Observable } from 'rxjs';
// import both TASK from Task which is up (1) level ../../
import { Task } from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  // passing in the HttpClient will allow us to use GET/POST by using .get() etc
  constructor(private http: HttpClient) { }

  // implement Task[] as an Observable task 
  getTasks(): Observable<Task[]> {

    return this.http.get<Task[]>(this.apiUrl);
  }

  // create the deleteTask service method ()
  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  // create the updateTaskReminder service method ()
  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`
    return this.http.put<Task>(url, task, httpOptions);
  }

  // create the addTask service method ()
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }
}
