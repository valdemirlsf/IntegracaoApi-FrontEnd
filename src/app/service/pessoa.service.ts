import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Pessoa } from "../model/pessoa";

@Injectable({
    providedIn: 'root'
})

export class PessoaService{
    private url_api = 'http://localhost:8080';

    constructor(private http: HttpClient){
        
    }
    create (pessoa :Pessoa){
        return this.http.post<Pessoa[]>(this.url_api+'/pessoa/', pessoa);
    }
    findAll(){
        return this.http.get<Pessoa[]>(this.url_api+'/pessoa/');
    }
    delete(id: Number){
        return this.http.delete<Pessoa>(this.url_api+'/pessoa/'+id);
    }
    update (pessoa: Pessoa){
        return this.http.put<Pessoa[]>(this.url_api+'/pessoa/'+pessoa.id, pessoa);
    }
}