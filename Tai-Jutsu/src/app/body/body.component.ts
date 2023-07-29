import { ImgService } from './../img.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent {
  service: ImgService;

  constructor(ImgService: ImgService, public router: Router) {
    this.service = ImgService;
  }

  get img() {
    return this.service.img;
  }
}
