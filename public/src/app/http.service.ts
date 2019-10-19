import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    // this.getTasks();
  }
  getTasks() {
    return this._http.get('/tasks');
  }
  getTaskId(id: string) {
    return this._http.get('/tasks/' + id);
  }
  addTask(newtask) {
    return this._http.post('/tasks', newtask)
  }
  EditTaskId(task) {
    return this._http.put('/tasks/'+task.id, task);
  }
  DeleteTaskId(id) {
    return this._http.delete('/tasks/'+ id);
  }
}

