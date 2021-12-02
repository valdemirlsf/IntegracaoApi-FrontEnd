import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Historico } from "../model/historico";

@Injectable({
    providedIn: 'root'
})

export class HistoricoService{
    private url_api = 'http://localhost:8080';

    constructor(private http: HttpClient){
        
    }
    create (historico :Historico){
        return this.http.post<Historico[]>(this.url_api+'/historico/', historico);
    }
    findAll(){
        return this.http.get<Historico[]>(this.url_api+'/historico/');
    }
}