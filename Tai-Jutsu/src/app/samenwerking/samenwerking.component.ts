import { Component } from '@angular/core';
import { ImgService } from '../img.service';

@Component({
  selector: 'app-samenwerking',
  templateUrl: './samenwerking.component.html',
  styleUrls: ['./samenwerking.component.css'],
})
export class SamenwerkingComponent {
  img: String = 'assets/images/tai-zaal.jpg';
  constructor(ImgService: ImgService) {
    ImgService.img = this.img;
  }
}
