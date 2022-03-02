import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tempform',
  templateUrl: './tempform.component.html',
  styleUrls: ['./tempform.component.css']
})
export class TempformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  saveproducts(prodForm:any){
    console.log(prodForm);
    console.log(prodForm.value)
  }

}
