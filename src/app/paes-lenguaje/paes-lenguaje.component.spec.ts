import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaesLenguajeComponent } from './paes-lenguaje.component';

describe('PaesLenguajeComponent', () => {
  let component: PaesLenguajeComponent;
  let fixture: ComponentFixture<PaesLenguajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaesLenguajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaesLenguajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
