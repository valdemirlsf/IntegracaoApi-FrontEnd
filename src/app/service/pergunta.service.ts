import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Pergunta } from "../model/pergunta";

@Injectable({
    providedIn: 'root'
})

export class PerguntaService{
    private url_api = 'http://localhost:8080';

    constructor(private http: HttpClient){
        
    }
    create (pergunta :Pergunta){
        return this.http.post<Pergunta[]>(this.url_api+'/pergunta/', pergunta);
    }
    findAll(){
        return this.http.get<Pergunta[]>(this.url_api+'/pergunta/');
    }
    delete(id: Number){
        return this.http.delete<Pergunta>(this.url_api+'/pergunta/'+id);
    }
    update (pergunta: Pergunta){
        return this.http.put<Pergunta[]>(this.url_api+'/pergunta/'+pergunta.id, pergunta);
    }
}