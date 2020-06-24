import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services2/persona.service';

@Component({
  selector: 'app-pantalla-filtrado',
  templateUrl: './pantalla-filtrado.component.html',
  styleUrls: ['./pantalla-filtrado.component.css']
})
export class PantallaFiltradoComponent implements OnInit {

  personasp: any;
  constructor(private personaService2: PersonaService) { }

  ngOnInit() {
  }

  limpiarTodo(nombre) {
    nombre.value = "";
    this.personaService2.getListaPersonas().subscribe(data => this.personasp = data);
  }

  filtrarPorNombre(nombre) {
    //Si nombre es vacio
    if (nombre.value == "") {
      this.personaService2.getListaPersonas().subscribe(data => this.personasp = data);
    } else {
      //sino es vacio
      this.personaService2.getFiltroPersonaPorNombre(nombre.value).subscribe(data => this.personasp = data);
    }
  }

}
