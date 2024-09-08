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
      texto: 'En una industria hay un estanque de acumulación de agua con forma de\n' +
          'cilindro recto, cuyas medidas del radio y altura son 2 m y 4 m, respectivamente.\n' +
          'El consumo de agua diario en la industria es del 50 % de la capacidad total\n' +
          'del estanque.\n' +
          '¿Cuántos metros cúbicos de agua aproximadamente se consumen diariamente en\n' +
          'la industria si se considera aproximado a 3?',
      opciones: ['6', '12', '24', '96']
    },
    {
      id: 2,
      texto: '¿Cuál es el río más largo del mundo?',
      opciones: ['Amazonas', 'Nilo', 'Yangtsé', 'Danubio']
    },
    {
      id: 3,
      texto: '¿Quién pintó la Mona Lisa?',
      opciones: ['Van Gogh', 'Picasso', 'Da Vinci', 'Rembrandt']
    }
  ];

  public respuestasCorrectasMatematicas: RespuestasModel[] = [
    {
      id: 1,
      respuestaCorrecta: 'París'
    },
    {
      id: 2,
      respuestaCorrecta: 'Amazonas'
    },
    {
      id: 3,
      respuestaCorrecta: 'Da Vinci'
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
