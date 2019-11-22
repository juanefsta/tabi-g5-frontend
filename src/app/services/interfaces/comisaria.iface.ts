import { Observable } from 'rxjs';
import { Comisaria } from 'src/app/shared/models/comisaria.model';

export interface IComisariaService{
    GetAllComisarias():Observable<Comisaria>;
}