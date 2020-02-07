import { Component, OnInit, AfterContentInit, Input, OnChanges } from '@angular/core';
@Component({
  selector: 'advanced-pie-chart',
  templateUrl: './advanced-pie-chart.component.html',
  styleUrls: ['./advanced-pie-chart.component.css']
})
export class AdvancedPieChartComponent {

  view: any[] = [500, 500];
  colorScheme = {
    domain: ["red", "blue", "green"]
  };
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  dataToShow: object[] = [];




  @Input() data: any[];
  constructor(
  ) { }

  ngOnChanges() {
    Object.assign(this, this.data);
   } 
  
  ngOnInit() {  }
}
