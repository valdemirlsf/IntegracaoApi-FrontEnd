import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PerguntaComponent } from './pergunta-component/pergunta-component.component';
import { PessoaComponent } from './pessoa-component/pessoa-component.component';
import { SimuladoComponent } from './simulado/simulado.component';

const routes: Routes = [
  {path: 'pessoa', component: PessoaComponent},
  {path: 'pergunta', component: PerguntaComponent},
  {path: 'simulado', component: SimuladoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
