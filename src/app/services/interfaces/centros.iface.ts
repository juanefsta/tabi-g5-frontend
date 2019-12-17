import { Observable } from 'rxjs';
import { Centro } from 'src/app/shared/models/centro-atencion.model';

export interface ICentroService{
    GetAllCentros():Observable<Centro[]>;
}