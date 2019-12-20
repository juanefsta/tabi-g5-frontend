import { Component, OnInit } from '@angular/core';
import { Municipio } from 'src/app/shared/models/municipio.model';
import { MunicipiosService } from 'src/app/services/municipios.service';
import { NumberCardModel } from 'src/app/shared/models/number-card.model';
import { NgChartModel } from 'src/app/shared/models/ngChart-model';

@Component({
  selector: 'app-municipios',
  templateUrl: './municipios.component.html',
  styleUrls: ['./municipios.component.css']
})

export class MunicipiosComponent implements OnInit {
  municipios: Municipio[] = [];
  numberCardModel: NumberCardModel;
  advChartModel: any[] = [];
  muniConCentros: number = 0;
  muniSinCentros: number = 0;
  constructor(
    private _municipioService: MunicipiosService
  ) {
    this._municipioService.GetAllMunicipios()
      .subscribe((res: any) => {
        this.municipios.push(...res.body.data);
      });;
  }

  ngOnInit() {
    
    this._municipioService.GetCantidadSinCentro()
      .subscribe((res: any) => {
        Object.assign(this.muniConCentros, res.body.data);
      });;
    this._municipioService.GetCantidadConCentro()
      .subscribe((res: any) => {
        this.muniConCentros = res.body.data;
      });;
    console.log(this.muniConCentros);
    this.createAdvancedPieChartInfo(this.municipios);
  }

  createAdvancedPieChartInfo(listado: Municipio[]) {
     this.advChartModel.push(new NgChartModel("Sin centro de atención", 2));
     this.advChartModel.push(new NgChartModel("Con centro de atención", 6));
  }
}
