import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

declare var $:any;
import { ROUTESC } from './assets-child';
import { ROUTESP } from './assets-parent';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

    parentcourse: any[];
    chilecourse: any[];


  constructor(private activatedRoute: ActivatedRoute, private router: Router, private location: Location) {
   }

   goToCourese(){
      this.router.navigateByUrl('/courses/all');
      location.reload()
   }
  ngOnInit() {
       this.parentcourse = ROUTESP.filter(parentcourse => parentcourse);
       this.chilecourse = ROUTESC.filter(chilecourse => chilecourse);
  }
}
