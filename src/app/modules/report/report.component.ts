import { Component, OnInit } from '@angular/core';
import { ComisariaService } from 'src/app/services/comisaria.service';
import { Comisaria } from 'src/app/shared/models/comisaria.model';
import { single } from './data';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  // Number Card
  single: any[];
  view: any[] = [700, 400];

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  cardColor: string = '#232837';  

  // Linear Gauge
  value: number = 34;
  previousValue: number = 34;
  units: string = 'Municipios sin centros de atención a mujeres';

  // Gauge
  legend: boolean = true;
  legendPosition: string = 'below';


  constructor() {
    Object.assign(this, { single });
  }

  ngOnInit() {
  }

}
