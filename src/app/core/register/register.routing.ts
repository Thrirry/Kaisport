import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register.component';

const routes: Routes =[
  { path: 'MEMBER/REGISTER',  component: RegisterComponent,
  },
  
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: false })
  ],
  exports: [
    RouterModule
  ],
})
export class RegisterRoutingModule { }
