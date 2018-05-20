import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModule } from './home/home.module';
import { CoursesModule} from './courses/courses.module';
import { FocusonModule} from './focuson/focuson.module';
import { ContactModule } from './contact/contact.module';
import { TrainerModule } from './trainer/trainer.module';
import { MapsModule } from './maps/maps.module';
import { EventModule } from './event/event.module';



@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    CoursesModule,
    FocusonModule,
    ContactModule,
    TrainerModule,
    MapsModule,
    EventModule

  ],
  declarations: []
})
export class PagesModule { }
