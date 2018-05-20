import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from "@angular/router";


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  start: boolean = false
  stringSologan1: string = "With 25 courses"
  stringSologan2: string = " You're ready adventures with us?"

  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
    setTimeout(() => this.start = true, 1000)
  }

}
