import { Component, OnInit } from '@angular/core';
import {RespuestasMatematica} from './respuestas-matematica';

@Component({
  selector: 'app-paes-matematica',
  templateUrl: './paes-matematica.component.html',
  styleUrls: ['./paes-matematica.component.css']
})
export class PaesMatematicaComponent implements OnInit {

  respuestasCorrectas: RespuestasMatematica[] = [
    { numeroPregunta: 1, respuesta: 'A' },
    { numeroPregunta: 2, respuesta: 'C' },
    { numeroPregunta: 3, respuesta: 'C' },
    { numeroPregunta: 4, respuesta: 'D' }
  ];

  respuestasUsuario: RespuestasMatematica[] = [
    { numeroPregunta: 1, respuesta: 'A' },
    { numeroPregunta: 2, respuesta: 'C' },
    { numeroPregunta: 3, respuesta: 'C' },
    { numeroPregunta: 4, respuesta: 'D' }
  ];

  constructor() { }

  ngOnInit() {
  }

  comprobarRespuestas() {
    this.respuestasUsuario.forEach((respuestaUsuario, index) =>{
      const respuestaCorrecta = this.respuestasCorrectas[index];
      if (respuestaUsuario.respuesta === respuestaCorrecta.respuesta){
        console.log(`Repuesta ${respuestaUsuario.numeroPregunta} correcta`);
      } else {
        console.log(`Respuesta ${respuestaUsuario.numeroPregunta} incorrecta`);
      }
    });
  }

}
