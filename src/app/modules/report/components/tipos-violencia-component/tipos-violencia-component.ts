import { Component } from '@angular/core';
import { violencias_llamadas } from '../../../db_json_data';

@Component({
  selector: 'tipos-violencia-chart',
  templateUrl: './tipos-violencia-component.html',
  styleUrls: ['./tipos-violencia-component.css']
})
export class TiposViolenciaComponent {
  view: any[] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Country';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Normalized Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  constructor() {
    Object.assign(this, { violencias_llamadas });
  }

}
