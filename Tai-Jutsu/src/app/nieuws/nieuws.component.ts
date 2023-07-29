import { Component } from '@angular/core';
import { ImgService } from '../img.service';

@Component({
  selector: 'app-nieuws',
  templateUrl: './nieuws.component.html',
  styleUrls: ['./nieuws.component.css'],
})
export class NieuwsComponent {
  img: String = 'assets/images/tai-zaal.jpg';
  constructor(ImgService: ImgService) {
    ImgService.img = this.img;
  }
}
