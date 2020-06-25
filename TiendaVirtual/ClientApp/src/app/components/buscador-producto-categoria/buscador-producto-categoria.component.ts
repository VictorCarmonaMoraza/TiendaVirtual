import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'buscador-producto-categoria',
  templateUrl: './buscador-producto-categoria.component.html',
  styleUrls: ['./buscador-producto-categoria.component.css']
})
export class BuscadorProductoCategoriaComponent implements OnInit {

  categorias: any;
  constructor(private categoriaServicio: CategoriaService) { }

  ngOnInit() {
    this.categoriaServicio.
      getCategoria().subscribe(p => this.categorias = p);
  }

}
