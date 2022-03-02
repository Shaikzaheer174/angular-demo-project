import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private myhttp:HttpClient) { }
  getServerData(){
    return this.myhttp.get("https://jsonplaceholder.typicode.com/posts/1/comments")
  }



  myarr=new Array<string>();

addtoarray(item:string){
    this.myarr.push(item);
  }

getarray(){
  return this.myarr;
}


}
