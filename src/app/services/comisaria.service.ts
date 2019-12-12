import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IComisariaService } from './interfaces/comisaria.iface';
import { Comisaria } from '../shared/models/comisaria.model';
import { HttpService } from '../config/http.service';
import { ApplicationConstants } from '../../assets/applicationConstants.enum';

@Injectable({
  providedIn: 'root'
})
export class ComisariaService implements IComisariaService {


  constructor(private httpService: HttpService) { }

  GetAllComisarias(): Observable<Comisaria[]> {
    return this.httpService.DoGet(ApplicationConstants.GET_COMISARIAS);
  }
}