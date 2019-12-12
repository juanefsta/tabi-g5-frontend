import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ICentroService } from './interfaces/centros.iface';
import { Centro } from '../shared/models/centro-atencion.model';
import { HttpService } from '../config/http.service';
import { ApplicationConstants } from '../../assets/applicationConstants.enum';

@Injectable({
  providedIn: 'root'
})
export class CentroService implements ICentroService {


  constructor(private httpService: HttpService) { }

  GetAllCentros(): Observable<Centro[]> {
    return this.httpService.DoGet(ApplicationConstants.GET_CENTROS);
  }
}