import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  constructor(private service: PerguntaService, private snackBar: MatSnackBar){
    
  }
  
  ngOnInit(): void{
    this.findAll();
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action,{
      duration: 2000
    });
  }
  
  
  findAll(){
    this.service.findAll().subscribe(
      (response) => {
        this.temDados = true;
        this.dataSource = new MatTableDataSource <Pergunta>(response)
      },
      (response) => {
        this.openSnackBar('Não foi possível listar', 'Fechar')
        console.log('erro')
      }
    );
  }
  delete(id: Number){
    this.service.delete(id).subscribe(
      (response) =>{
        this.openSnackBar('Deletado com sucesso', 'Fechar')
        this.findAll();
      },
      (response) => {
        this.openSnackBar('Erro ao deletar ', 'Fechar')
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
          this.openSnackBar('Editado com sucesso', 'Fechar')
          this.findAll();
        },
        (response)=>{
          this.openSnackBar('Não conseguimos editar', 'Fechar')
        }  
      );
    }else{
      this.service.create(this.pergunta).subscribe(
        (response) => {
          this.findAll();
          this.openSnackBar('Pessoa cadastrada com sucesso', 'Fechar')
        },
        (response) => {
          this.openSnackBar('Não foi possível cadastrar', 'Fechar')
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
