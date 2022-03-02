import { Component, Input, OnInit, Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() childmessage:any;

  @Output() messageEvent=new EventEmitter<string>();

  sendmessage(){
    this.messageEvent.emit("hello from child");
  }







  constructor() { }

  ngOnInit(): void {
  }

}
