import { Component, OnInit,Input } from '@angular/core';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'tabla-producto',
  templateUrl: './tabla-producto.component.html',
  styleUrls: ['./tabla-producto.component.css']
})
export class TablaProductoComponent implements OnInit {

   @Input() productos: any;
  cabeceras:string[]=["Id Producto","Nombre","Precio","Stock","Nombre Categoria"]
  constructor(private producto: ProductoService) { }

  //Todo lo que pongamos en el ngOnInit se va a ejecutar cuando carga la pagina
  ngOnInit() {
    this.producto.getProducto()
      //Sacar la data
      .subscribe(data => this.productos = data);

  }

}
