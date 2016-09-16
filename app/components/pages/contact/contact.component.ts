import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: 'app/components/pages/contact/contact.component.html',
})
export class ContactComponent {
  jbtHeading: string;
  jbtText: string;
  jbtBtnText: string;
  jbtBtnUrl: string;
  constructor(){
    this.jbtHeading = 'Wanna Contact?!';
    this.jbtText = 'Thanks for your attention, please find us on GitHub: xanhtool or email us on Gmail: xanhtool@gmail.com';
    this.jbtBtnText = 'Learn more';
    this.jbtBtnUrl = 'http://google.com.vn';
  }
}
