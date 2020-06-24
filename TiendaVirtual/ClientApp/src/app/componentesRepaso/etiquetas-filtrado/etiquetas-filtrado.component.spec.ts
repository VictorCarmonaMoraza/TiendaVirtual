import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtiquetasFiltradoComponent } from './etiquetas-filtrado.component';

describe('EtiquetasFiltradoComponent', () => {
  let component: EtiquetasFiltradoComponent;
  let fixture: ComponentFixture<EtiquetasFiltradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtiquetasFiltradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtiquetasFiltradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
