import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { SignupComponent } from './signup/signup.component';
import { TaskComponent } from './task/task.component';
import { TempformComponent } from './tempform/tempform.component';

const routes: Routes = [
  //{path:'',component:HomeComponent},  //default
  {path:'',component:LoginComponent},
  {path:'home/logid',component:HomeComponent},
  {path:'backtohome',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'task',component:TaskComponent},
  {path:'tempform',component:TempformComponent},
  {path:'reactiveform',component:ReactiveformComponent},
  {path:'product',component:ProductComponent},
  {path:'editprod/:prodid',component:ProductComponent},           // parameterized routing 
  {path:'**',component:ErrorComponent}, //error
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
