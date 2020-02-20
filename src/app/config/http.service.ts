import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApplicationConstants } from '../../assets/applicationConstants.enum';

@Injectable({
    providedIn: 'root'
})

export class HttpService {
    constructor(private httpClient: HttpClient) { }

    public DoGet(url: string){
        return this.httpClient.get(ApplicationConstants.API_ENDPOINT + url, {observe: 'response'});
    }
}