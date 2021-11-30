import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PerguntaComponent } from './pergunta-component/pergunta-component.component';
import { PessoaComponent } from './pessoa-component/pessoa-component.component';

const routes: Routes = [
  {path: 'pessoa', component: PessoaComponent},
  {path: 'pergunta', component: PerguntaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
