import { Component,ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
declare var google;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})





export class HomePage implements OnInit, AfterViewInit {
  map;
  @ViewChild('mapElement') mapElement: ElementRef;

  constructor() {
  }

  ngOnInit():void{ 
  }

  ngAfterViewInit(): void {
    const map = new google.maps.Map(this.mapElement.nativeElement, {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  }

}
