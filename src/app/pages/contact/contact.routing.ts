import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact.component';

const routes: Routes =[
  { path: '',  component: ContactComponent,
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
export class ContactRoutingModule { }
