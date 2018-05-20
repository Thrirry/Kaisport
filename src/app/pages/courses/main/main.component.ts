import { Component, OnInit, AfterContentInit, Output, EventEmitter} from '@angular/core';
import { ROUTES } from './assets'

import { Location } from '@angular/common';

import { Router } from "@angular/router";

declare var $:any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterContentInit {

  courses: any[];
  reload: number;
  reload1: number;

  @Output()
  navChange = new EventEmitter();
  
  public curRoutePath: string = '/all';

  constructor(private router: Router, private location: Location) {

  }

  ngOnInit() {
    this.courses = ROUTES.filter(courses => courses);
  }

    ngAfterContentInit(): void {
    if (location.pathname === '/') {
      this.curRoutePath = '/all';
    } else {
      this.curRoutePath = location.pathname;
    }
  }

  navClick(path: string) {
    this.curRoutePath = path || '/all';
    this.navChange.emit(path.substr(1));
  }
}
