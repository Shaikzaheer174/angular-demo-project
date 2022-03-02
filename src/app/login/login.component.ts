import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginid:string="";
  password:string="";
  logError:string="";
  validate(){
    if(this.loginid=="sa" && this.password=="pass123")
    {
      this.logError="";
      this.router.navigate(['/home',this.loginid]);
    }

    else{
      this.logError="invalid User";
    }
     
  }
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
}
