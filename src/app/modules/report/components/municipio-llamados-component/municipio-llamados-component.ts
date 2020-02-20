import { Component, OnInit, AfterContentInit } from '@angular/core';
import { municipios_llamados } from '../../../db_json_data';

@Component({
  selector: 'municipio-llamado-chart',
  templateUrl: './municipio-llamados-component.html',
  styleUrls: ['./municipio-llamados-component.css']
})
export class MunicipioLlamadoComponent {

    single: any[];
    view: any[] = [1000, 400];

    // options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    showXAxisLabel = true;
    xAxisLabel = 'Municipio';
    showYAxisLabel = true;
    yAxisLabel = 'Llamados';
    colorScheme = {
      domain: ['#52e5ff', '#52ffab', '#e2ff52', '#ff8352', '#a12020', '#d442a3', '#c542d4', '#6442d4', '#569bf0', '#75f0a4', '#b2ed87']
    };

  constructor() {
   Object.assign(this, { municipios_llamados });
  }

}
