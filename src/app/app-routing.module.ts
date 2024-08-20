import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PaesMatematicaComponent} from './paes-matematica/paes-matematica.component';
import {PaesLenguajeComponent} from './paes-lenguaje/paes-lenguaje.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'matematica', component: PaesMatematicaComponent },
  { path: 'lenguaje', component: PaesLenguajeComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
