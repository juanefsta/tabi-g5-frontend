import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PieChartComponent } from './pie-chart.component';

@NgModule({
  declarations: [
    PieChartComponent,
  ],
  exports: [
    PieChartComponent
  ],
  imports: [
    NgxChartsModule,
  ],
  entryComponents: [
  ]
})
export class PieChartModule { }
