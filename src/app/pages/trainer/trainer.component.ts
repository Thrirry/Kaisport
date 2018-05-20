import { Component, OnInit } from '@angular/core';

import { ROUTES } from './../home/trainer/assets';
declare var $:any;

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  trainers: any[];

  constructor() { }

  ngOnInit() {
     this.trainers = ROUTES.filter(trainers => trainers);
  }

}
