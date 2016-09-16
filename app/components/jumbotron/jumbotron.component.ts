import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jumbotron',
  templateUrl: 'app/components/jumbotron/jumbotron.component.html',
})
export class JumbotronComponent {
  jbtHeading: string;
  jbtText: string;
  jbtBtnText: string;
  jbtBtnUrl: string;
  constructor(){
    this.jbtHeading = 'Hello, world!';
    this.jbtText = 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.';
    this.jbtBtnText = 'Learn more';
    this.jbtBtnUrl = 'http://google.com.vn';
  }
}
