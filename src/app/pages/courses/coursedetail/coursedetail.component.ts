import { Component, OnInit, OnDestroy, AfterContentInit, EventEmitter } from '@angular/core';
import { ROUTES } from './assets'

declare var $:any;
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'course-detail',
  templateUrl: './coursedetail.component.html',
  styleUrls: ['./coursedetail.component.css']
})
export class CoursedetailComponent {

  course: any[] = ROUTES;
  start: string;
  
  stringSologan1: string;
  stringSologan2: string;
  coursess: any[];

  constructor() { }

  public curPath: string;


  path: string;
  private sub: any;

    ngOnInit() {
    this.course = ROUTES.filter(course => course);
  }

   ngOnDestroy() {
    this.sub.unsubscribe();
  }

    ngAfterContentInit(): void {
      this.curPath = location.pathname;
  }

}
