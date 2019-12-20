import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IMunicipiosService } from './interfaces/municipios.iface';
import { Municipio } from '../shared/models/municipio.model';
import { HttpService } from '../config/http.service';
import { ApplicationConstants } from '../../assets/applicationConstants.enum';

@Injectable({
  providedIn: 'root'
})
export class MunicipiosService implements IMunicipiosService {


  constructor(private httpService: HttpService) { }
  
  GetAllMunicipios(): Observable<Municipio[]> {
    return this.httpService.DoGet(ApplicationConstants.GET_MUNICIPIOS);
  }
  GetAllMunicipiosSinCentrosDeAtencion(): Observable<Municipio[]> {
    return this.httpService.DoGet(ApplicationConstants.GET_MUNICIPIOSSINCENTROATENCION);
  }
  GetMunicipioByNombre(nombre: String):  Observable<Municipio> {
    return this.httpService.DoGet(ApplicationConstants.GET_MUNICIPIOBYNAME + nombre);
  }  
  GetCantidadSinCentro():  Observable<number> {
    return this.httpService.DoGet(ApplicationConstants.GET_CANTSINCENTRO);
  }  
  GetCantidadConCentro():  Observable<number> {
    return this.httpService.DoGet(ApplicationConstants.GET_CANTCONCENTRO);
  }
}