import { Component } from '@angular/core';
import { victima_sexo, sexo_agresor } from '../../../db_json_data';

@Component({
  selector: 'llamadas-sexo-chart',
  templateUrl: './llamadas-sexo-component.html',
  styleUrls: ['./llamadas-sexo-component.css']
})
export class LLamadasSexoComponent {
  view: any[] = [850, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  constructor() {
    Object.assign(this, { victima_sexo });
    Object.assign(this, { sexo_agresor });
  }

}
