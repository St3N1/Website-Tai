import { Component } from '@angular/core';
import { ImgService } from '../img.service';

@Component({
  selector: 'app-dojo',
  templateUrl: './dojo.component.html',
  styleUrls: ['./dojo.component.css'],
})
export class DojoComponent {
  img: String = 'assets/images/tai-zaal.jpg';
  constructor(ImgService: ImgService) {
    ImgService.img = this.img;
  }
}
