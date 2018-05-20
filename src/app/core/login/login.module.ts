import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { CommonModules } from '../../common/common.module';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing';





@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    
    LoginRoutingModule,
    CommonModules,
    RouterModule,

  ],
  declarations: [
    LoginComponent,
  ]
})
export class LoginModule { }