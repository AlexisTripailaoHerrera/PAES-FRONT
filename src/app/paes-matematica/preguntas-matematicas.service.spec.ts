import { TestBed } from '@angular/core/testing';

import { PreguntasMatematicasService } from './preguntas-matematicas.service';

describe('PreguntasMatematicasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PreguntasMatematicasService = TestBed.get(PreguntasMatematicasService);
    expect(service).toBeTruthy();
  });
});
