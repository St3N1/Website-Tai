import { Component } from '@angular/core';
import { ImgService } from './../img.service';

@Component({
  selector: 'app-documenten',
  templateUrl: './documenten.component.html',
  styleUrls: ['./documenten.component.css'],
})
export class DocumentenComponent {
  img: String = 'assets/images/tai-zaal.jpg';
  constructor(ImgService: ImgService) {
    ImgService.img = this.img;
  }
}
