import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pagenotfound',
  templateUrl: 'app/components/pages/pagenotfound/pagenotfound.component.html',
})
export class PageNotFoundComponent {
  jbtHeading: string;
  jbtText: string;
  jbtBtnText: string;
  jbtBtnUrl: string;
  constructor(){
    this.jbtHeading = 'OOPS!....';
    this.jbtText = 'This is 404 page. We cannot found what you want to see.. Sorry!';
    this.jbtBtnText = 'Learn more';
    this.jbtBtnUrl = 'http://google.com.vn';
  }
}
