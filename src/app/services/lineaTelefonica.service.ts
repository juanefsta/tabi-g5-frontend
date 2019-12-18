import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpService } from '../config/http.service';
import { ApplicationConstants } from '../../assets/applicationConstants.enum';
import { ILineaTelefonicaService } from './interfaces/lineaTelefonica.iface';
import { NgChartModel } from '../shared/models/ngChart-model';

@Injectable({
    providedIn: 'root'
})
export class LineaTelefonicaService implements ILineaTelefonicaService {


    constructor(private httpService: HttpService) { }

    GetAllLlamadasPorMunicipio(): Observable<NgChartModel[]> {
        return this.httpService.DoGet(ApplicationConstants.GET_LLAMADASPORMUNICIPIO);
    }
}