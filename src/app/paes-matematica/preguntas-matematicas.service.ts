import { Injectable } from '@angular/core';
import {PreguntasModel} from '../common/preguntas-model';
import {RespuestasModel} from '../common/respuestas-model';
import {Resultados} from '../common/resultados-model';
import {HttpClient} from '@angular/common/http';
import {UsersVO} from '../common/users-model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreguntasMatematicasService {

  public preguntasMatematicas: PreguntasModel[] = [
    {
      id: 1,
      img: 'assets/matematica/mate1.jpg',
      opciones: ['A', 'B', 'C', 'D']
    }
  ];

  public respuestasCorrectasMatematicas: RespuestasModel[] = [
    {
      id: 1,
      respuestaCorrecta: 'C'
    }
  ];

  private resultados: Resultados[] = [{ respuestasCorrectas: 0, respuestasIncorrectas: 0, respuestasNulas: 0 }];

  private modo: boolean;

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
}
