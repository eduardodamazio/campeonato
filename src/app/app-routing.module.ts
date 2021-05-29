import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroclubeComponent } from './cadastroclube/cadastroclube.component';
import { CadastrojogadorComponent } from './cadastrojogador/cadastrojogador.component';
import { ClubeComponent } from './clube/clube.component';
import { HomeComponent } from './home/home.component';
import { JogadorComponent } from './jogador/jogador.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { NovapartidaComponent } from './novapartida/novapartida.component';
import { PartidaComponent } from './partida/partida.component';

const routes: Routes = [
{path:'jogador', component: JogadorComponent},
{path:'clube', component: ClubeComponent},
{path:'partida', component: PartidaComponent},
{path:'cadastroclube',component: CadastroclubeComponent},
{path:'cadastrojogador', component: CadastrojogadorComponent},
{path: 'novapartida',component: NovapartidaComponent},
{path: 'noticias', component: NoticiasComponent},
{path:'', component: HomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
