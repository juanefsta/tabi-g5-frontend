import { Component } from '@angular/core';
import { vinculo_agresor } from '../../../db_json_data';

@Component({
  selector: 'vinculos-chart',
  templateUrl: './vinculos-component.html',
  styleUrls: ['./vinculos-component.css']
})
export class VinculosComponent {
  view: any[] = [700, 400];
  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  constructor() {
    Object.assign(this, { vinculo_agresor });
  }

}
