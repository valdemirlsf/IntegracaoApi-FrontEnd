import {Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PessoaService } from './service/pessoa.service';
import { Pessoa } from './model/pessoa';
import { MatSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'impacta-quiz';
  displayedColumns: string[] = ['id', 'Nome', 'Idade', 'Ações'];
  dataSource: any;
  pessoa: Pessoa = new Pessoa();
  mostrarForm: boolean = false;
  temDados: boolean = false;
  constructor(private service: PessoaService){
    
  }
  
  ngOnInit(): void{
    this.findAll();
  }
  
  
  
  findAll(){
    this.service.findAll().subscribe(
      (response) => {
        console.log('sucesso');
        this.temDados = true;
        this.dataSource = new MatTableDataSource <Pessoa>(response)
      },
      (response) => {
        console.log('erro')
      }
    );
  }
  delete(id: Number){
    this.service.delete(id).subscribe(
      (response) =>{
        console.log(id+'deletado com sucesso');
        this.findAll();
      },
      (response) => {
        console.log('Não foi possível');
      });
  }
  editar(element: any){
    this.mostrarForm = true;
    this.pessoa = element;
  }

  salvar(){
    
    if(this.pessoa.id){
      this.service.update(this.pessoa).subscribe(
        (response)=>{
          this.findAll();
          console.log("funcionou");
        },
        (response)=>{
          console.log("Não foi")
        }  
      );
    }else{
      this.service.create(this.pessoa).subscribe(
        (response) => {
          this.findAll();
          console.log('cadastro efetuado com sucesso');
        },
        (response) => {
          console.log('Não conseguimos cadastrar')
        }
      );
    }
    this.mostrarForm = false;
    
  }
  novaPessoa(){
    this.mostrarForm = true;
    this.pessoa = new Pessoa();
  }
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
