import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { PersonaService } from '../../services2/persona.service';


@Component({
  selector: 'etiquetas-filtrado',
  templateUrl: './etiquetas-filtrado.component.html',
  styleUrls: ['./etiquetas-filtrado.component.css']
})
export class EtiquetasFiltradoComponent implements OnInit {

  @Output() pulsarBoton: EventEmitter<any>;
  @Output() pulsarLimpiar: EventEmitter<any>;

  
  constructor(private personaService2: PersonaService) {
    this.pulsarBoton = new EventEmitter();
    this.pulsarLimpiar = new EventEmitter();
  }

  ngOnInit() {
  }
  
  filtrarPersonasPorNombre(nombreFil) {
    this.pulsarBoton.emit(nombreFil);
  }
  LimpiarLabel(nombre) {
    this.pulsarLimpiar.emit(nombre);
  }

}
