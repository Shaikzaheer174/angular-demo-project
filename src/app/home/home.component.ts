import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private act:ActivatedRoute,) { }



  logid:any;
  ngOnInit(): void {
    this.logid=this.act.snapshot.paramMap.get("logid");
  }
}
