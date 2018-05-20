import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { CommonModules } from '../../common/common.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { SliderComponent } from './slider/slider.component';
import { CourseComponent } from './course/course.component';
import { FocusComponent } from './focus/focus.component';
import { TrainerComponent } from './trainer/trainer.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { JoinnowComponent } from './joinnow/joinnow.component';




@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    
    HomeRoutingModule,
    CommonModules,
    RouterModule,

  ],
  declarations: [
    HomeComponent,
    SliderComponent,
    CourseComponent,
    FocusComponent,
    TrainerComponent,
    FeedbackComponent,
    JoinnowComponent


  ]
})
export class HomeModule { }