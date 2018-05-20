import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { CommonModules } from '../../common/common.module';
import { TrainerComponent } from './trainer.component';
import { TrainerRoutingModule } from './trainer.routing';





@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    
    TrainerRoutingModule,
    CommonModules,
    RouterModule,

  ],
  declarations: [
    TrainerComponent,
  ]
})
export class TrainerModule { }