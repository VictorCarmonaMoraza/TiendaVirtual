import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
@Component({
  selector: 'filtrado-producto-nombre',
  templateUrl: './filtrado-producto-nombre.component.html',
  styleUrls: ['./filtrado-producto-nombre.component.css']
})
export class FiltradoProductoNombreComponent implements OnInit {

  fproductos: any;
  constructor(private productoService: ProductoService) { }

  ngOnInit() {

  }
  filtrarDatos(nombre) {
    //Si nombre es vacio
    if (nombre.value == "") {
      this.productoService.getProducto().subscribe(data => this.fproductos=data);
    } else {
      //sino es vacio
      this.productoService.getFiltroProductoPorNombre(nombre.value).subscribe(data => this.fproductos=data);
    }
   
  }
  limpiarTodo(nombre) {
    nombre.value = "";
    this.productoService.getProducto().subscribe(data => this.fproductos = data);
  } 
    
}
