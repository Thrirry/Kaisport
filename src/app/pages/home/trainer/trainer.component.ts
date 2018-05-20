import { Component, OnInit } from '@angular/core';
import { ROUTES } from './assets';
declare var $:any;
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  traineritems: any[];

  constructor(private router: Router) { }

  goToTrainer(){
     this.router.navigateByUrl('/trainer');
      location.reload()
  }

  ngOnInit() {
     $.getScript('../../../../assets/js/function_home.min.js');
     this.traineritems = ROUTES.filter(traineritems => traineritems);
  }

}
