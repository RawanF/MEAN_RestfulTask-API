import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
// import { Pipe, PipeTransform } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  name = 'Rawan';
  tasks: Object;
  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.getTasksFromService();
  }
  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {//when the data is ready run this
      console.log("Got our tasks!", data)
      this.tasks=data;
      console.log(this.tasks)
   });
  }
}
