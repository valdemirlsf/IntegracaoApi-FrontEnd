import { Component, OnInit } from '@angular/core';
import { Historico } from '../model/historico';
import { Pergunta } from '../model/pergunta';
import { PerguntaService } from '../service/pergunta.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Renderer2 } from '@angular/core';
import { style } from '@angular/animations';

@Component({
  selector: 'app-simulado',
  templateUrl: './simulado.component.html',
  styleUrls: ['./simulado.component.css']
})
export class SimuladoComponent implements OnInit {
  perguntas: Pergunta[] = [];
  pergunta: Pergunta = new Pergunta();
  acertouMessage: String = '';
  constructor(private perguntaService: PerguntaService,private snackBar: MatSnackBar, private renderer: Renderer2) { }

  ngOnInit(): void {

    this.buscarPerguntas()
  }
  cliquePergunta(resposta: String, id: String){
    console.log(resposta+' '+ this.pergunta.respostaCorreta)
    let elemento= this.renderer.selectRootElement('#'+id, true);
    let elemento2= this.renderer.selectRootElement('#mensagem', true);
    if(resposta==this.pergunta.respostaCorreta){
      this.renderer.setStyle(elemento,'backgroundColor', 'lightgreen');
      this.acertouMessage =  'Você acertou!';
      this.renderer.setStyle(elemento2,'color', 'green');
    }else{
      this.renderer.setStyle(elemento,'backgroundColor', 'red');
      this.acertouMessage =  'Você errou!';
      this.renderer.setStyle(elemento2,'color', 'red');
    }
    
  }
  buscarPerguntas(){
    this.perguntaService.findAll().subscribe(
      (response) => {
        this.perguntas = <Pergunta []>(response)
        this.apresentarPergunta()
      },
      (response) => {
        console.log('erro')
      }
    );
  }
  apresentarPergunta(){
    if(this.perguntas.length>0){
      let perguntaAtual = parseInt((Math.random() * (this.perguntas.length - 0) + 0)+'');
      console.log(perguntaAtual)
      this.pergunta = this.perguntas[perguntaAtual];
    }else{
      this.openSnackBar('Não existem perguntas na base de dados','Fechar')
    }
    
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action,{
      duration: 2000
    });
  }
}
