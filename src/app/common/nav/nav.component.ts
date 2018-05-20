import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ROUTES } from './assets'

declare var $:any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  animal: string;
  name: string;

  cate: any[] = ROUTES;

  constructor() {}


  goToEvent(){
  }
  goToContact(){
  }
  ngOnInit() {
      this.cate = ROUTES.filter(cate => cate);
     $.getScript('../../../assets/js/function-main.min.js'); //for slide left-bar
  }

}


