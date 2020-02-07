import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs'
import { HorizontalBarTopicsComponent } from './horizontal-bar-topics/horizontal-bar-topics.component';
import { MunicipiosModule } from '../municipios/municipios.module';
@NgModule({
  declarations: [
    ReportComponent,
    HorizontalBarTopicsComponent
  ],
  exports: [
    HorizontalBarTopicsComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    ReportRoutingModule,
    MatListModule,
    FormsModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTabsModule,
    MatTableModule,
    ReactiveFormsModule,
    MatExpansionModule,
    NgxChartsModule,
    MatInputModule,
    MatIconModule,
    MatSortModule,
    MunicipiosModule
  ],
  entryComponents: [
    HorizontalBarTopicsComponent
  ]
})
export class ReportModule { }
