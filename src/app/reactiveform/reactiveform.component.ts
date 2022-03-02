import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Customvalidator } from '../customvalidator';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

 
prodForm=new FormGroup(
  {
    prodid:new FormControl('',[Validators.required]),
    prodname:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    price:new FormControl('',[Validators.required,Customvalidator.priceValidator]),
    category:new FormControl('',[Validators.required]),
    phonenumber:new FormControl('',Customvalidator.phonevalidator)
    }
 )

 saveProduct(){
  console.log(this.prodForm.value);
 }


  constructor() { }

  ngOnInit(): void {
  }

}
