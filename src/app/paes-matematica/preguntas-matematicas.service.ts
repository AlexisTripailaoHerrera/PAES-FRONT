import { Injectable } from '@angular/core';
import {PreguntasModel} from '../common/model/preguntas-model';
import {RespuestasModel} from '../common/model/respuestas-model';
import {Resultados} from '../common/model/resultados-model';
import {HttpClient} from '@angular/common/http';
import {UsersVO} from '../common/model/users-model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreguntasMatematicasService {

  public preguntasMatematicas: PreguntasModel[] = [
    {
      id: 1,
      imgSrc: 'mate1.jpg',
      opciones: ['A', 'B', 'C', 'D']
    },
    {
      id: 2,
      imgSrc: 'mate2.jpg',
      opciones: ['A', 'B', 'C', 'D']
    },
    {
      id: 3,
      imgSrc: 'mate3.jpg',
      opciones: ['A', 'B', 'C', 'D']
    },
    {
      id: 4,
      imgSrc: 'mate4.jpg',
      opciones: ['A', 'B', 'C', 'D']
    },
    {
      id: 5,
      imgSrc: 'mate5.jpg',
      opciones: ['A', 'B', 'C', 'D']
    }
  ];

  public respuestasCorrectasMatematicas: RespuestasModel[] = [
    {
      id: 1,
      respuestaCorrecta: 'B'
    },
    {
      id: 2,
      respuestaCorrecta: 'A'
    },
    {
      id: 3,
      respuestaCorrecta: 'A'
    },
    {
      id: 4,
      respuestaCorrecta: 'B'
    },
    {
      id: 5,
      respuestaCorrecta: 'D'
    }
  ];

  private resultados: Resultados[] = [{ respuestasCorrectas: 0, respuestasIncorrectas: 0, respuestasNulas: 0 }];

  private modo: boolean;

  private preguntaActualIndex  = 0;

  private apiUrl = 'https://back-paes.onrender.com';

  constructor(private http: HttpClient) { }

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

  crearUsuario(usersVO: UsersVO): Observable<UsersVO> {
    return this.http.post<UsersVO>(this.apiUrl + '/users/crear', usersVO, {
      headers: {'Content-Type': 'application/json'}
    });
  }

  // Métodos para gestionar la pregunta actual
  setPreguntaActual(index: number) {
    this.preguntaActualIndex = index;
  }

  getPreguntaActual(): number {
    return this.preguntaActualIndex;
  }
}
