import { Observable } from 'rxjs';
import { Municipio } from 'src/app/shared/models/municipio.model';

export interface IMunicipiosService{
    GetAllMunicipios():Observable<Municipio[]>;
    GetAllMunicipiosSinCentrosDeAtencion():Observable<Municipio[]>;
}