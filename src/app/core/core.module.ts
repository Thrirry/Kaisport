import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';



@NgModule({
  imports: [
    CommonModule,
    RegisterModule,
    LoginModule

  ],
  declarations: []
})
export class CoreModule { }
