import { Component, OnInit } from '@angular/core';

import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

var map;
var maxZoomService;
var infoWindow;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  lat: number = 16.065676317953837;
  lng: number = 108.22005271911621;

  start: boolean = false
  stringContent: string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting"


  onChoseLocation(event){
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    // console.log(event);
  }

  constructor() { }

  ngOnInit() {

    setTimeout(() => this.start = true, 1000)
   
    }



}
