import { Observable } from 'rxjs';
import { NgChartModel } from 'src/app/shared/models/ngChart-model';

export interface ILineaTelefonicaService{
    GetAllLlamadasPorMunicipio():Observable<NgChartModel[]>;
}