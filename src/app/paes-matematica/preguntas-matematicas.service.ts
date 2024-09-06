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
      texto: '¿Cuál es la capital de Francia?',
      opciones: ['Berlín', 'Madrid', 'París', 'Londres']
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

  constructor() { }

  setResultados(resultados: Resultados[]) {
    this.resultados = resultados;
  }

  getResultados(): Resultados[] {
    return this.resultados;
  }
}
