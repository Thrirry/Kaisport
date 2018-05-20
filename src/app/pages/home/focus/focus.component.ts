import { Component, OnInit } from '@angular/core';
declare var $:any;
import { ROUTES } from './assets';

import { Router } from "@angular/router";

@Component({
  selector: 'app-focus',
  templateUrl: './focus.component.html',
  styleUrls: ['./focus.component.css']
})
export class FocusComponent implements OnInit {

  focusitems: any[];
  
  constructor(private router: Router) { 

  }

  ngOnInit() {
    this.focusitems = ROUTES.filter(focusitems => focusitems);
  }

}
