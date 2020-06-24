import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PersonaService {

  
  urlBase2: string = "";
  constructor(private http: Http, @Inject('BASE_URL') baseUrl: string) {
    //urlBase tiene el nombre del dominio
    this.urlBase2 = baseUrl;
  }

  public getListaPersonas() {
    return this.http.get(this.urlBase2 + "api/Persona/listarPersonas")
      //Convertimos la lista en json
      .map(res => res.json());
  }
  public getFiltroPersonaPorNombre(nombre) {
    return this.http.get(this.urlBase2 + "api/Producto/filtrarPorNombre/" + nombre)
      .map(res => res.json());
  }
}
