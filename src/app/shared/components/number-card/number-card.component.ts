import { Component, OnInit, AfterContentInit } from '@angular/core';
@Component({
  selector: 'number-card',
  templateUrl: './number-card.component.html',
  styleUrls: ['./number-card.component.css']
})
export class NumberCardComponent {


  single: any[];
  view: any[] = [700, 400];

  constructor() {
   // Object.assign(this, {  });
  }

}