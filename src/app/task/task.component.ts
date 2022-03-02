import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

imageurl = "/assets/1.jpg"
isclicked:boolean=false;

swap(){
  if(this.isclicked)
  {
    this.imageurl="/assets/1.jpg";
    this.isclicked=false;
  }
  else
  {
    this.imageurl="/assets/2.jpg"
    this.isclicked=true;
  }
}





  constructor() { }

  ngOnInit(): void {
  }

}
