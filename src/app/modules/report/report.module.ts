import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FilteredListComponent } from './filtered-list/filtered-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs'
import { MunicipioSinCentroComponent } from './mun-sin-centro/mun-sin-centro.component';
import { MunicipioConCentroComponent } from './mun-con-centro/mun-con-centro.component';
import { LlamadasFilteredListComponent } from './llamadas-filtered-list/llamadas-filtered-list.component';
import { AtencionLineaComponent } from './atencion-linea/atencion-linea.component';
import { HorizontalBarTopicsComponent } from './horizontal-bar-topics/horizontal-bar-topics.component';
@NgModule({
  declarations: [
    ReportComponent,
    MunicipioSinCentroComponent,
    MunicipioConCentroComponent,
    FilteredListComponent,
    LlamadasFilteredListComponent,
    AtencionLineaComponent,
    HorizontalBarTopicsComponent
  ],
  exports: [
    FilteredListComponent,
    LlamadasFilteredListComponent,
    MunicipioSinCentroComponent,
    MunicipioConCentroComponent,
    AtencionLineaComponent,
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
    MatSortModule
  ],
  entryComponents: [
    FilteredListComponent,
    LlamadasFilteredListComponent,
    MunicipioSinCentroComponent,
    MunicipioConCentroComponent,
    AtencionLineaComponent,
    HorizontalBarTopicsComponent
  ]
})
export class ReportModule { }
