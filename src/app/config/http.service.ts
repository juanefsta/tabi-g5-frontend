import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApplicationConstants } from '../../assets/applicationConstants.enum';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class HttpService {
    constructor(private httpClient: HttpClient) { }

    public DoGet(url: string): Observable<any>{
        return this.httpClient.get<any[]>(ApplicationConstants.API_ENDPOINT + url, {observe: 'response'});
    }
}