import { Component, OnInit } from '@angular/core';
import {PreguntasMatematicasService} from './preguntas-matematicas.service';
import {Resultados} from '../common/model/resultados-model';
import {Router} from '@angular/router';
import {UsersVO} from '../common/model/users-model';

@Component({
  selector: 'app-paes-matematica',
  templateUrl: './paes-matematica.component.html',
  styleUrls: ['./paes-matematica.component.css']
})
export class PaesMatematicaComponent implements OnInit {

  public preguntas: any[] = [];
  private respuestasCorrectas: any[] = [];
  public resultados: Resultados[] = [{respuestasCorrectas: 0, respuestasIncorrectas: 0, respuestasNulas: 0}];
  public preguntaActual = 0;

  constructor(private preguntasMatematicasService: PreguntasMatematicasService,
              private router: Router) { }

  ngOnInit() {
    this.preguntas = this.preguntasMatematicasService.preguntasMatematicas;
    this.respuestasCorrectas = this.preguntasMatematicasService.respuestasCorrectasMatematicas;
    this.preguntaActual = this.preguntasMatematicasService.getPreguntaActual();
  }

  // Método para avanzar a la siguiente pregunta
  siguientePregunta() {
    if (this.preguntaActual < this.preguntas.length - 1) {
      this.preguntaActual++;
    }
  }

  // Método para retroceder a la pregunta anterior
  anteriorPregunta() {
    if (this.preguntaActual > 0) {
      this.preguntaActual--;
    }
  }

  // Método para seleccionar una respuesta
  seleccionarOpcion(preguntaId: number, opcion: string) {
    const pregunta = this.preguntas.find(p => p.id === preguntaId);
    if (pregunta) {
      pregunta.respuestaSeleccionada = opcion;
    }
  }

  // Método para saltar a una pregunta específica
  irAPregunta(index: number) {
    this.preguntaActual = index;
  }

  revisar(modoRevision: boolean) {
    const resultado = this.resultados[0];
    this.preguntas.forEach(pregunta => {
      const respuestaCorrecta = this.respuestasCorrectas.find(resp => resp.id === pregunta.id);
      if (respuestaCorrecta) {
        // Si no hay respuesta seleccionada, debe considerarse como nula
        if (pregunta.respuestaSeleccionada === undefined) {
          resultado.respuestasNulas++;
        } else {
          // Comparar la respuesta seleccionada con la correcta
          if (pregunta.respuestaSeleccionada === respuestaCorrecta.respuestaCorrecta) {
            resultado.respuestasCorrectas++;
          } else {
            resultado.respuestasIncorrectas++;
          }
        }
      } else {
        // Si no hay respuesta correcta para esta pregunta
        resultado.respuestasNulas++;
      }

    });
    this.preguntasMatematicasService.setResultados(this.resultados);
    this.preguntasMatematicasService.setPreguntaActual(this.preguntaActual);

    if (!modoRevision) {
      this.preguntas.forEach(pregunta => {
        pregunta.respuestaSeleccionada = undefined;
      });
      this.preguntasMatematicasService.setModo(false);
    } else {
      this.preguntasMatematicasService.setModo(true);
    }

    this.router.navigate(['/resultados']);
  }

  guardar() {
    const newUser: UsersVO = {
      username: 'vicente',
      contrasena: '12345',
      tipoUsuario: 'normal',
      activo: true
    };
    this.preguntasMatematicasService.crearUsuario(newUser).subscribe(response => {
      console.log('Usuario creado', response);
    }, error => {
      console.error('Error al crear usuario', error);
    });
  }

}
