import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MunicipiosRoutingModule } from './municipios-routing.module';
import { MunicipiosComponent } from './municipios.component';
import { AdvancedPieChartModule } from 'src/app/shared/components/advanced-pie-chart/advanced-pie-chart.module';
import { NumberCardModule } from 'src/app/shared/components/number-card/number-card.module';

@NgModule({
  declarations: [
    MunicipiosComponent,
  ],
  exports: [
    MunicipiosComponent
  ],
  imports: [
    CommonModule,
    MunicipiosRoutingModule,
    AdvancedPieChartModule,
    NumberCardModule,
  ],
  entryComponents: [
  ]
})
export class MunicipiosModule { }
