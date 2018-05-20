import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { CoursesComponent } from './courses.component';

import { CoursedetailComponent } from './coursedetail/coursedetail.component';
import { MainComponent } from './main/main.component';

const routes: Routes =[
  { path: 'courses',  component: CoursesComponent,
      children: [
      { path: 'all',  component: MainComponent},
      ]
  },

  { path: 'courses-detail/:path',  component: CoursedetailComponent,
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
export class CoursesRoutingModule { }
