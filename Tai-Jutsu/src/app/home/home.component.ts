import { Component } from '@angular/core';
import { ImgService } from '../img.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  img: String = 'assets/images/verdedigingsschool JP-41.jpeg';
  constructor(ImgService: ImgService) {
    ImgService.img = this.img;
  }
}
