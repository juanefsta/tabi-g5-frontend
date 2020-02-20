import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AdvancedPieChartComponent } from './advanced-pie-chart.component';

@NgModule({
  declarations: [
    AdvancedPieChartComponent,
  ],
  exports: [
    AdvancedPieChartComponent
  ],
  imports: [
    NgxChartsModule,
  ],
  entryComponents: [
  ]
})
export class AdvancedPieChartModule { }
