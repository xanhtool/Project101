import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: 'app/components/navbar.component.html',
  styleUrls:['app/components/navbar.component.css'],
   styles: ['a { color: red; }']
})
export class navBarComponent {
  private projectName : string;
  constructor(){
    this.projectName = "XanhTool"
  }
}
