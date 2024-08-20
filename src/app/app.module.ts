import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PaesMatematicaComponent } from './paes-matematica/paes-matematica.component';
import { PaesLenguajeComponent } from './paes-lenguaje/paes-lenguaje.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaesMatematicaComponent,
    PaesLenguajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
