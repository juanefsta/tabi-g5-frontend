import { Component, OnInit } from '@angular/core';
import { Municipio } from 'src/app/shared/models/municipio.model';
import { MunicipiosService } from 'src/app/services/municipios.service';

@Component({
    selector: 'mun-con-centro',
    templateUrl: './mun-con-centro.component.html',
    styleUrls: ['./mun-con-centro.component.css']
})
export class MunicipioConCentroComponent implements OnInit {

    municipios: Municipio[] = [];
    listado: Municipio[] = [];

    // Linear gauge config
    view: any[] = [400, 400];
    colorScheme = { domain: ['#ed13ac'] };
    units: string;
    previousValue: number;
    value: number;
    maxValue: number;

    constructor(private _municipioService: MunicipiosService) {
        this._municipioService.GetAllMunicipios()
            .subscribe((res: any) => {
                Object.assign(this.municipios, res.body.data)
                this.listado = this.municipios.filter(function hasCentros(x: any) {
                    return x.cantCentros > 0;
                });
                this.value = this.listado.length;
                this.maxValue = this.municipios.length;
                this.previousValue = this.listado.length;
            });;
    }

    ngOnInit() {
        this.value = this.listado.length;
        this.maxValue = this.municipios.length;
        this.previousValue = this.listado.length;
        this.units = "Municipios con centros de atención para mujeres";
    }
} 