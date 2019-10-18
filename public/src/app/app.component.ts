import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

// import { Pipe, PipeTransform } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  name :string = 'Rawan';
  nameFromEv:String;
  tasks: Object;
  task;
  constructor(private _httpService: HttpService){}
  ngOnInit(){
    // this.getTasksFromService();
  }
  GetAllTasks(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {//when the data is ready run this
      console.log("Got our tasks!", data)
      this.tasks=data;
      console.log(this.tasks)
   });
  }
  GetTaskByID(id: string){
    let observable = this._httpService.getTaskId(id);
    observable.subscribe(data => {//when the data is ready run this
      console.log("Got one task!", data)
      this.task=data;
      console.log(this.task)
      
   });  }
}
