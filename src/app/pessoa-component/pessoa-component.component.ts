import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatSnackBar} from '@angular/material/snack-bar';
import { PessoaService } from '../service/pessoa.service';
import { Pessoa } from '../model/pessoa';

@Component({
  selector: 'app-pessoa-component',
  templateUrl: './pessoa-component.component.html',
  styleUrls: ['./pessoa-component.component.css']
})
export class PessoaComponent implements OnInit {
  displayedColumns: string[] = ['id', 'Nome', 'Idade', 'Ações'];
  dataSource: any;
  pessoa: Pessoa = new Pessoa();
  mostrarForm: boolean = false;
  temDados: boolean = false;
  constructor(private service: PessoaService, private _snackBar: MatSnackBar){
    
  }
  
  ngOnInit(): void{
    this.findAll();
  }
  
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action,{
      duration: 2000
    });
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
        this.openSnackBar('Deletado com sucesso', 'fechar');
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
          this.openSnackBar('Alterado com sucesso', 'Fechar');
        },
        (response)=>{
          this.openSnackBar('Não foi possível alterar Pessoa', 'Fechar');
        }  
      );
    }else{
      this.service.create(this.pessoa).subscribe(
        (response) => {
          this.openSnackBar('Salvo', 'Fechar');
          this.findAll();
        },
        (response) => {
          this.openSnackBar('Não foi possível salvar', 'Fechar');
        }
      );
    }
    this.mostrarForm = false;
    
  }
  novaPessoa(){
    this.mostrarForm = true;
    this.pessoa = new Pessoa();
  }
  cancelar(){
    this.mostrarForm=false;
    this.pessoa = new Pessoa();
  }
}
