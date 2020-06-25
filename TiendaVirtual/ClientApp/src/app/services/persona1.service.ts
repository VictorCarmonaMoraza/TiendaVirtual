import { Injectable,Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class Persona1Service {
  urlBase: string;

  constructor(private http: Http, @Inject('BASE_URL') baseUrl: string) {
    this.urlBase = baseUrl;
  }
  public getPersona() {
   return this.http.get(this.urlBase + "api/Persona1/listarPersonas")
      //Convertimos a json la lista
      .map(res => res.json());
  }

}
