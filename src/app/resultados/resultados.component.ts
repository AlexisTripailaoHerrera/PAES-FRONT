import {Component, Input, OnInit} from '@angular/core';
import {Resultados} from '../common/model/resultados-model';
import {PreguntasMatematicasService} from '../paes-matematica/preguntas-matematicas.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
  resultados: Resultados[] = [];
  modoRevision: boolean;
  constructor( private preguntasMatematicaService: PreguntasMatematicasService,
               private router: Router) { }

  ngOnInit() {
    this.resultados = this.preguntasMatematicaService.getResultados();
    this.modoRevision = this.preguntasMatematicaService.getModo();
  }

  volverHome() {
    this.router.navigate(['/home']);
  }

  volverPrueba() {
    this.router.navigate(['/matematica']);
  }

}
