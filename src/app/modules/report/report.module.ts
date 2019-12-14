import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { NgxChartsModule } from '@swimlane/ngx-charts';
@NgModule({
  declarations: [ReportComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    ReportRoutingModule,
    NgxChartsModule
  ]
})
export class ReportModule { }
