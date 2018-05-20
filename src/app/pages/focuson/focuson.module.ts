import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { CommonModules } from '../../common/common.module';
import { FocusonComponent } from './focuson.component';
import { FocusonRoutingModule } from './focuson.routing';





@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    
    FocusonRoutingModule,
    CommonModules,
    RouterModule,

  ],
  declarations: [
    FocusonComponent,
  ]
})
export class FocusonModule { }