import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PerguntaService } from '../service/pergunta.service';
import { Pergunta } from '../model/pergunta';

@Component({
  selector: 'app-pergunta-component',
  templateUrl: './pergunta-component.component.html',
  styleUrls: ['./pergunta-component.component.css']
})
export class PerguntaComponent implements OnInit {
  displayedColumns: string[] = ['id', 'titulo', 'Resposta1', 'Resposta2', 'Resposta3', 'Resposta Correta', 'acoes'];
  dataSource: any;
  pergunta: Pergunta = new Pergunta();
  mostrarForm: boolean = false;
  temDados: boolean = false;
  constructor(private service: PerguntaService){
    
  }
  
  ngOnInit(): void{
    this.findAll();
  }
  
  
  
  findAll(){
    this.service.findAll().subscribe(
      (response) => {
        console.log('sucesso');
        this.temDados = true;
        this.dataSource = new MatTableDataSource <Pergunta>(response)
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
    this.pergunta = element;
  }

  salvar(){
    
    if(this.pergunta.id){
      this.service.update(this.pergunta).subscribe(
        (response)=>{
          this.findAll();
          console.log("funcionou");
        },
        (response)=>{
          console.log("Não foi")
        }  
      );
    }else{
      this.service.create(this.pergunta).subscribe(
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
  novaPergunta(){
    this.mostrarForm = true;
    this.pergunta = new Pergunta();
  }
  cancelar(){
    this.mostrarForm=false;
    this.pergunta = new Pergunta();
  }

}
