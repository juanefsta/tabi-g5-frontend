import { Component } from '@angular/core';
import { nacionalidades_victimas } from '../../../db_json_data';

@Component({
  selector: 'nacionalidades-chart',
  templateUrl: './nacionalidades-component.html',
  styleUrls: ['./nacionalidades-component.css']
})
export class NacionalidadesComponent {
  view: any[] = [1000, 750];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Nacionalidad';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Cantidad';

  colorScheme = {
    domain: ['#52e5ff', '#52ffab', '#e2ff52', '#ff8352', '#a12020', '#d442a3', '#c542d4', '#6442d4', '#569bf0', '#75f0a4', '#b2ed87']
  };
  constructor() {
    Object.assign(this, { nacionalidades_victimas });
  }

}
