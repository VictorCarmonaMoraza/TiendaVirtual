import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { TablaProductoComponent } from './components/tabla-producto/tabla-producto.component';
import { ProductoService } from './services/producto.service';
import { BuscadorProductoNombreComponent } from './components/buscador-producto-nombre/buscador-producto-nombre.component';
import { FiltradoProductoNombreComponent } from './components/filtrado-producto-nombre/filtrado-producto-nombre.component';
import { TablaPersonasComponent } from './componentesRepaso/tabla-personas/tabla-personas.component';
import { PersonaService } from './services2/persona.service';
import { MenuNuevoComponent } from './componentesRepaso/menu-nuevo/menu-nuevo.component';
import { EtiquetasFiltradoComponent } from './componentesRepaso/etiquetas-filtrado/etiquetas-filtrado.component';
import { PantallaFiltradoComponent } from './componentesRepaso/pantalla-filtrado/pantalla-filtrado.component';
import { BuscadorProductoCategoriaComponent } from './components/buscador-producto-categoria/buscador-producto-categoria.component';
import { FiltradoProductoCategoriaComponent } from './components/filtrado-producto-categoria/filtrado-producto-categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    TablaProductoComponent,
    BuscadorProductoNombreComponent,
    FiltradoProductoNombreComponent,
    TablaPersonasComponent,
    MenuNuevoComponent,
    EtiquetasFiltradoComponent,
    PantallaFiltradoComponent,
    BuscadorProductoCategoriaComponent,
    FiltradoProductoCategoriaComponent
  ],
  imports: [
    HttpModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'filtradoProductoNombre', component: FiltradoProductoNombreComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'listaPersonas', component: PantallaFiltradoComponent },
      { path: 'menunuevo', component: MenuNuevoComponent },
    ])
  ],
  providers: [ProductoService, PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
