import { Component, OnInit } from '@angular/core';
import { Persona1Service } from '../../services/persona1.service';

@Component({
  selector: 'tabla-persona',
  templateUrl: './tabla-persona.component.html',
  styleUrls: ['./tabla-persona.component.css']
})
export class TablaPersonaComponent implements OnInit {

  personas: any;
  cabeceras: string[] = ["Id Persona", "Nombre Completo", "Telefono", "Correo"];
  constructor(private persona1Service: Persona1Service) { }

  ngOnInit() {
    this.persona1Service.getPersona()
      .subscribe(data => this.personas = data);
  }

}
