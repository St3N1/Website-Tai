import { Component } from '@angular/core';
import { ImgService } from '../img.service';

@Component({
  selector: 'app-trainingsuren',
  templateUrl: './trainingsuren.component.html',
  styleUrls: ['./trainingsuren.component.css'],
})
export class TrainingsurenComponent {
  img: String = 'assets/images/tai-zaal.jpg';
  constructor(ImgService: ImgService) {
    ImgService.img = this.img;
  }
}
