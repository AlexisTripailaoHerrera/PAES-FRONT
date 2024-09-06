import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PaesMatematicaComponent} from './paes-matematica/paes-matematica.component';
import {PaesLenguajeComponent} from './paes-lenguaje/paes-lenguaje.component';
import {ResultadosComponent} from './resultados/resultados.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'matematica', component: PaesMatematicaComponent },
  { path: 'lenguaje', component: PaesLenguajeComponent },
  {path: 'resultados', component: ResultadosComponent},
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
