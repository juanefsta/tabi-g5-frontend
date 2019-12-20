import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { LineaComponent } from './linea.component';
import { LineaRoutingModule } from './linea-routing.module';

@NgModule({
  declarations: [
    LineaComponent,
  ],
  exports: [
    LineaComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    LineaRoutingModule,
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
  ]
})
export class LineaModule { }
