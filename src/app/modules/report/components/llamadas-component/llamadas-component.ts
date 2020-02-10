import { Component} from '@angular/core';

@Component({
  selector: 'total-llamadas-chart',
  templateUrl: './llamadas-component.html',
  styleUrls: ['./llamadas-component.css']
})
export class LLamadasComponent {

  view: any[] = [400, 400];
  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  value: number = 31448;
  max: number = 48821;
  previousValue: number = 31448;
  units: string = 'Llamadas en la provincia de Buenos Aires';

  constructor() {
  }

}
