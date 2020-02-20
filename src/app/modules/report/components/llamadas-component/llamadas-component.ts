import { Component} from '@angular/core';

@Component({
  selector: 'total-llamadas-chart',
  templateUrl: './llamadas-component.html',
  styleUrls: ['./llamadas-component.css']
})
export class LLamadasComponent {

  view: any[] = [1000, 300];
  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  value: number = 31448;
  max: number = 48821;
  previousValue: number = 31448;
  units: string = 'Llamadas registradas en la línea 144 de la Provincia de Buenos Aires';

  constructor() {
  }

}
