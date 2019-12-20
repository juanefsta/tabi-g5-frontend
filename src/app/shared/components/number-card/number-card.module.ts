import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NumberCardComponent } from './number-card.component';

@NgModule({
  declarations: [
    NumberCardComponent,
  ],
  exports: [
    NumberCardComponent
  ],
  imports: [
    NgxChartsModule,
  ],
  entryComponents: [
  ]
})
export class NumberCardModule { }
