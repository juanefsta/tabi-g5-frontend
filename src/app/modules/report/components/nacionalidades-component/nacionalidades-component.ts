import { Component } from '@angular/core';
import { nacionalidades_victimas } from '../../../db_json_data';

@Component({
  selector: 'nacionalidades-chart',
  templateUrl: './nacionalidades-component.html',
  styleUrls: ['./nacionalidades-component.css']
})
export class NacionalidadesComponent {
  view: any[] = [2000, 800];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Country';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  constructor() {
    Object.assign(this, { nacionalidades_victimas });
  }

}
