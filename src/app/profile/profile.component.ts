import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-profile',
  template: '<h1>welcome to myapp</h1>',
  styles: ['h1{ color:blue }']
})
export class ProfileComponent implements OnInit {

  constructor(private myrouter:Router,private ps:ProductService) { }
  servData:any;
  ngOnInit(): void
  {
    this.ps.getServerData().subscribe(
      (data)=>{
          console.log(data);
          this.servData=data;
      },
      (error)=>
      {
        console.log(error);
      }
     
    )
  }
}
