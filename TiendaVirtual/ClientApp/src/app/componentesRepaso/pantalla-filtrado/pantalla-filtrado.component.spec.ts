import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaFiltradoComponent } from './pantalla-filtrado.component';

describe('PantallaFiltradoComponent', () => {
  let component: PantallaFiltradoComponent;
  let fixture: ComponentFixture<PantallaFiltradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantallaFiltradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaFiltradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
