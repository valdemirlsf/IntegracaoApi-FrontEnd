import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { PerguntaComponent } from './pergunta-component/pergunta-component.component';
import { PessoaComponent } from './pessoa-component/pessoa-component.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SimuladoComponent } from './simulado/simulado.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider'

@NgModule({
  declarations: [
    AppComponent,
    PerguntaComponent,
    PessoaComponent,
    SimuladoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    MatCardModule,
    MatDividerModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
