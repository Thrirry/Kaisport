import { Component, OnInit } from '@angular/core';
import { ROUTES } from './assets'

declare var $:any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  slide: any[] = ROUTES;

  ngOnInit() {
    this.slide = ROUTES.filter(slide => slide);
  }

}
