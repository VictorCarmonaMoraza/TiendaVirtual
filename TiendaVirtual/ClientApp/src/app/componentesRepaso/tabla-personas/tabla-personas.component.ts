import { Component, OnInit, Input } from '@angular/core';
import { PersonaService } from '../../services2/persona.service';

@Component({
  selector: 'tabla-personas',
  templateUrl: './tabla-personas.component.html',
  styleUrls: ['./tabla-personas.component.css']
})
export class TablaPersonasComponent implements OnInit {
  @Input() personas: any;
  cabeceras: string[] = ["Id Persona", "Nombre", "Telefono", "Email"]
  constructor(private personaService2: PersonaService) { }

  ngOnInit() {
    this.personaService2.getListaPersonas().subscribe(data => this.personas = data);
  }
  

}
