import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { CommonModules } from '../../common/common.module';
import { MapsComponent } from './maps.component';

import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';

import { TypingAnimationModule } from 'angular-typing-animation';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    CommonModules,
    RouterModule,

    TypingAnimationModule,

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCsVn6hvjKUlSPVUiYECSmPsauaVofQAK4'
    })


  ],
  declarations: [
    MapsComponent
  ]
})
export class MapsModule { }