import { Component, OnInit, AfterContentInit } from '@angular/core';
import { centros_municipio } from '../../../db_json_data';

@Component({
  selector: 'municipio-chart',
  templateUrl: './municipio-component.html',
  styleUrls: ['./municipio-component.css']
})
export class MunicipioComponent {

    single: any[];
    view: any[] = [750, 150];
  
    colorScheme = {
      domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
    };
    cardColor: string = '#232837';

  constructor() {
   Object.assign(this, { centros_municipio });
  }

}
