import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';


@Component({
  selector: 'buscador-producto-categoria',
  templateUrl: './buscador-producto-categoria.component.html',
  styleUrls: ['./buscador-producto-categoria.component.css']
})
export class BuscadorProductoCategoriaComponent implements OnInit {

  @Output() clickBuscar: EventEmitter<any>;
  @Output() clickLimpiar: EventEmitter<any>;
  categorias: any;
  constructor(private categoriaServicio: CategoriaService) {
    this.clickBuscar = new EventEmitter();
    this.clickLimpiar = new EventEmitter();
  }

  ngOnInit() {
    this.categoriaServicio.
      getCategoria().subscribe(p => this.categorias = p);
  }
  buscar(categoria) {
    this.clickBuscar.emit(categoria);
  }
  limpiar(categoria) {
    this.clickLimpiar.emit(categoria);
  }

}
