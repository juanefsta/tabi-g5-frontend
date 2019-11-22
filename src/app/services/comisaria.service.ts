import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IComisariaService } from './interfaces/comisaria.iface';
import { Comisaria } from '../shared/models/comisaria.model';

@Injectable({
  providedIn: 'root'
})
export class ComisariaService implements IComisariaService {

  constructor() { }
  
  GetAllComisarias(): Observable<Comisaria> {
    throw new Error("Method not implemented.");
  }
}
