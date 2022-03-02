import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private myrouter:Router,private myservice:ProductService) { }

  ngOnInit(): void {
  }
  backtohome(){
    this.myrouter.navigate(['/backtohome'])
  }

  item:string="";
  savetoservice(){
    this.myservice.addtoarray(this.item);
  }

}
