import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { FocusonComponent } from './focuson.component';

const routes: Routes =[
  { path: '',  component: FocusonComponent,
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
export class FocusonRoutingModule { }
