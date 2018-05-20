import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { CommonModules } from '../../common/common.module';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register.routing';





@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    
    RegisterRoutingModule,
    CommonModules,
    RouterModule,

  ],
  declarations: [
    RegisterComponent,
  ]
})
export class RegisterModule { }