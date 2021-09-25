import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Farm } from './farm';

@Injectable({
    providedIn: 'root'
})

export class FarmService{
    constructor(private httpClient:HttpClient) {}

    private farm: string = 'http://localhost:8000/api/v2/farms/';

    obtain():Observable<Farm[]>{
        return this.httpClient.get<Farm[]>(`${this.farm}`)
    }

    save (farm: Farm): Observable<Farm>{
        if(farm.id){
            return this.httpClient.put<Farm>(`${this.farm}/${farm.id}`, farm);
        }else{
            return this.httpClient.post<Farm>(`${this.farm}`, farm);
        }
    }
}