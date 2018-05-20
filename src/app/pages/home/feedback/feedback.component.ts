import { Component, OnInit } from '@angular/core';
import { ROUTES } from './assets';
declare var $:any;


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbackitems: any[];

  constructor() { }

  ngOnInit() {
     this.feedbackitems = ROUTES.filter(feedbackitems => feedbackitems);
  }

}
