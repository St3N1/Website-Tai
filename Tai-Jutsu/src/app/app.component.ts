import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tai-Jutsu';
  headerfixed: boolean = true;
  prevScroll: number = 0;

  @HostListener('window:scroll', ['$event']) onScroll() {
    let scroll = window.scrollY;

    if (scroll > 300) this.headerfixed = false;
    if (this.prevScroll > scroll) this.headerfixed = true;

    this.prevScroll = scroll;
  }
}
