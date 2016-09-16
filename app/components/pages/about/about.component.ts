import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: 'app/components/pages/about/about.component.html',
})
export class AboutComponent {
  jbtHeading: string;
  jbtText: string;
  jbtBtnText: string;
  jbtBtnUrl: string;
  constructor(){
    this.jbtHeading = 'Welcome to about Page!';
    this.jbtText = 'This is about us, the developer created this web application';
    this.jbtBtnText = 'Learn more';
    this.jbtBtnUrl = 'http://google.com.vn';
  }
}
