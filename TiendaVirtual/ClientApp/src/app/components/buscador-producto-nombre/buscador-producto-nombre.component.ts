import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'buscador-producto-nombre',
  templateUrl: './buscador-producto-nombre.component.html',
  styleUrls: ['./buscador-producto-nombre.component.css']
})
export class BuscadorProductoNombreComponent implements OnInit {

  @Output() clickButton: EventEmitter<any>;
  @Output() limpiarButton: EventEmitter<any>;
  constructor() {
    this.clickButton = new EventEmitter();
    this.limpiarButton=new EventEmitter();
  }

  ngOnInit() {
  }
  //metodo que llamamo con el
  //<input type="button"(click) = "filtrar(nombre)" value = "Buscar" class="btn btn-primary" />
  filtrar(nombre) {
    //avisamos al padre que hemos echo un click
    this.clickButton.emit(nombre);
  }
  Limpiar(nombre1) {
    this.limpiarButton.emit(nombre1);
  }
}
