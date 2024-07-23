import { NgFor } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { register } from 'swiper/element/bundle';



register();
@Component({
  selector: 'app-sliderapp',
  standalone: true,
  imports: [NgFor],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './sliderapp.component.html',
  styleUrl: './sliderapp.component.css'
})
export class SliderappComponent implements OnInit{
  sliderImages = [
    "assets/img/imagen1.png",
    "assets/img/imagen2.png",
    "assets/img/imagen3.png",
    "assets/img/imagen4.png",
  ]
  // @ViewChild('myVideo', { static: true }) myVideo: ElementRef<HTMLVideoElement>;

  ngOnInit() {
    register();
  }

  // ngAfterViewInit() {
  //   if (this.myVideo) {
  //     this.myVideo.nativeElement.play();
  //   }
  // }
  
}