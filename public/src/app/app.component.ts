import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name: string = 'Rawan';
  nameFromEv: String;
  tasks: Object;
  task: any;
  newTask: any;
  editTask:any;
  isShow = true;
  constructor(private _httpService: HttpService) { }
  ngOnInit() {
    this.newTask = { title: "", description: "" }
    this.editTask = { id:"",title: "", description: "" }
  }
  GetAllTasks() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {//when the data is ready run this
      console.log("Got our tasks!", data)
      this.tasks = data;
      console.log(this.tasks)
    });
  }
  GetTaskByID(task) {
    console.log(task);
    let observable = this._httpService.getTaskId(task._id);
    observable.subscribe(data => {//when the data is ready run this
      console.log("Got one task!", data)
      this.task = data[0];
      console.log(this.task)
    });
  }
  onSubmit() {
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {//when the data is ready run this
      console.log("Task Created! ", data)
      this.newTask = { title: "", description: "" }
      this.GetAllTasks()
    });
  }
  EditTask(task) {
    console.log(task);
    let observable = this._httpService.EditTaskId(task);
    observable.subscribe(data => {
      console.log("Task Edited!", data)
      this.GetAllTasks()
      this.isShow = !this.isShow;
    });
  }
  DeleteTask(id: string) {
    console.log("--------------",id);
    let observable = this._httpService.DeleteTaskId(id);
    observable.subscribe(data => {//when the data is ready run this
      console.log("Task Deleted!", data)
      this.GetAllTasks()
    });
  }
  toggleDisplay(task) {
    console.log(task._id);
    this.editTask = {id: task._id, title: task.title, description: task.description};
    this.isShow = !this.isShow;
  }
}
