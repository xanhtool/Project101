import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: 'app/components/pages/home/home.component.html',
})
export class HomeComponent {
  jbtHeading: string;
  jbtText: string;
  jbtBtnText: string;
  jbtBtnUrl: string;
  constructor(){
    this.jbtHeading = 'Welcome Mr.Hiep Xanh';
    this.jbtText = 'This is a simple hero unit, are using in this battle! We are ready for action!';
    this.jbtBtnText = 'Learn more';
    this.jbtBtnUrl = 'http://google.com.vn';
  }
}
