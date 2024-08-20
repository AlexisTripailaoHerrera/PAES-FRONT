import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaesMatematicaComponent } from './paes-matematica.component';

describe('PaesMatematicaComponent', () => {
  let component: PaesMatematicaComponent;
  let fixture: ComponentFixture<PaesMatematicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaesMatematicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaesMatematicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
