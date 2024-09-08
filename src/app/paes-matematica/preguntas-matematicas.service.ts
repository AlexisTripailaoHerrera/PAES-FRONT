import { Injectable } from '@angular/core';
import {PreguntasModel} from '../common/preguntas-model';
import {RespuestasModel} from '../common/respuestas-model';
import {Resultados} from '../common/resultados-model';

@Injectable({
  providedIn: 'root'
})
export class PreguntasMatematicasService {

  public preguntasMatematicas: PreguntasModel[] = [
    {
      id: 1,
      texto: 'assets/img1.jpg',
      opciones: ['A', 'B', 'C', 'D']
    },
    {
      id: 2,
      texto: '¿Cuántos números enteros positivos son mayores o iguales que -4 y menores que 3?',
      opciones: ['2', '3', '4', '6']
    },
    {
      id: 3,
      texto: '¿Cuál es el resultado de (3/8:-6/16)-8/3?',
      opciones: ['-11/3', '-3', '11/3', '3']
    }
  ];

  public respuestasCorrectasMatematicas: RespuestasModel[] = [
    {
      id: 1,
      respuestaCorrecta: '-13'
    },
    {
      id: 2,
      respuestaCorrecta: '2'
    },
    {
      id: 3,
      respuestaCorrecta: '-11/3'
    }
  ];

  private resultados: Resultados[] = [{ respuestasCorrectas: 0, respuestasIncorrectas: 0, respuestasNulas: 0 }];

  private modo: boolean;

  constructor() { }

  setResultados(resultados: Resultados[]) {
    this.resultados = resultados;
  }

  getResultados(): Resultados[] {
    return this.resultados;
  }

  setModo(modo: boolean) {
    this.modo = modo;
  }

  getModo() {
    return this.modo;
  }
}
