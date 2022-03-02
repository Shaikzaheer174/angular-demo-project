import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title="E-learning";
  currDate=new Date();
  studentinfo = {studname:'zaheer',rollno:123,address:"tg"};
  features =['login','signup',"purchase-courses",'attend mocktests','practice']

  onclick(){
    alert("you passed your examinations, congratulations")
  }

newfeat:string="";
addnewfeat(){
  this.features.push(this.newfeat);
}


name:string="";
pass:string="";

validateuser(){
 if(this.name=="sa" && this.pass=="pass123"){
   alert("valid user")
 }
 else{
   alert("invalid user")
 }
}

// property binding
color:string="background-color: crimson;";

green(){
  this.color="background-color: green;"
}

yellow(){
  this.color="background-color: yellow;"
}
mymessage = 'its my message';


p:Product =new Product();
prodarray=new Array<Product>();
categories = ["groceries","electronics","fashion","utilities","beautyandhealth"];
saveproduct(){
  this.prodarray.push(this.p);
  console.log(this.prodarray);
  this.p=new Product();
}


deleteproduct(idx:number){
  this.prodarray.splice(idx,1);
}

  constructor(private actroute:ActivatedRoute) { }

  prodidvar:any

  ngOnInit(): void {
    this.prodidvar=this.actroute.snapshot.paramMap.get("prodid");

  }

}
