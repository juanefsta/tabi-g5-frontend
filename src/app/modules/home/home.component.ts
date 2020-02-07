import { Component, OnInit } from '@angular/core';
import { Comisaria } from 'src/app/shared/models/comisaria.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent   {

  public comisarias: Comisaria[] = [];
  constructor(
  ) { }
}
