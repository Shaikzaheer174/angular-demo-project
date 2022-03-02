import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zaheerapp';
  name = 'zaheer';
  place = 'myhome😂'

  messagetosend:string="a mesg from parent";

  message:string="";
  receivemessage($event:any){
    this.message=$event
  }

}
