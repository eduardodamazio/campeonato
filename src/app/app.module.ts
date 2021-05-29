import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClubeComponent } from './clube/clube.component';
import { JogadorComponent } from './jogador/jogador.component';
import { PartidaComponent } from './partida/partida.component';
import { HomeComponent } from './home/home.component';
import { CadastroclubeComponent } from './cadastroclube/cadastroclube.component';
import { CadastrojogadorComponent } from './cadastrojogador/cadastrojogador.component';
import { NovapartidaComponent } from './novapartida/novapartida.component';
import { NoticiasComponent } from './noticias/noticias.component';

@NgModule({
  declarations: [
    AppComponent,
    ClubeComponent,
    JogadorComponent,
    PartidaComponent,
    HomeComponent,
    CadastroclubeComponent,
    CadastrojogadorComponent,
    NovapartidaComponent,
    NoticiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
