import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';
import { NgxChartsModule, NumberCardModule } from '@swimlane/ngx-charts';
import { HorizontalBarTopicsComponent } from './horizontal-bar-topics/horizontal-bar-topics.component';
import { MunicipioComponent } from './components/municipio-component/municipio-component';
import { LLamadasComponent } from './components/llamadas-component/llamadas-component';
import { LLamadasSexoComponent } from './components/llamadas-sexo-component/llamadas-sexo-component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NacionalidadesComponent } from './components/nacionalidades-component/nacionalidades-component';
import { TiposViolenciaComponent } from './components/tipos-violencia-component/tipos-violencia-component';
import { VinculosComponent } from './components/vinculos-component/vinculos-component';
import { MunicipioLlamadoComponent } from './components/municipio-llamados-component/municipio-llamados-component';

@NgModule({
  declarations: [
    ReportComponent,
    HorizontalBarTopicsComponent,
    MunicipioComponent,
    LLamadasComponent,
    LLamadasSexoComponent,
    NacionalidadesComponent,
    TiposViolenciaComponent,
    VinculosComponent,
    MunicipioLlamadoComponent
  ],
  exports: [
    HorizontalBarTopicsComponent,
    MunicipioComponent,
    LLamadasComponent,
    LLamadasSexoComponent,
    NacionalidadesComponent,
    TiposViolenciaComponent,
    VinculosComponent,
    MunicipioLlamadoComponent
  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    NumberCardModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    HorizontalBarTopicsComponent
  ]
})
export class ReportModule { }
