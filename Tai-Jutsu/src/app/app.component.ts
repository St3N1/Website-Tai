import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tai-Jutsu';
  headerfixed: boolean = false;

  @HostListener('window:scroll', ['$event']) onScroll() {
    let scroll = window.scrollY;
    let prevScroll = 0;
    if (scroll > 400) {
      this.headerfixed = false;
    } else {
      this.headerfixed = true;
    }
    if (prevScroll > scroll) {
      console.log('boven');
      this.headerfixed = true;
    }
    prevScroll = scroll;
  }
}
