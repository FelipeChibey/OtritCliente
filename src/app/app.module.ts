import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppRouting } from './app.routing';
import { ChartsModule } from 'ng2-charts';


import { AppComponent } from './app.component';
import { EstadisticasComponent} from './estadisticasComponent/estadisticas.component';
import { MapaTiempoRealComponent } from './mapasComponent/mapaTiempoReal/mapaTiempoReal.component';
import { MapaHistoricoComponent } from './mapasComponent/mapaHistorico/mapaHistorico.component';
import { HomeComponent } from './homeComponent/home.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule, MatInputModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    EstadisticasComponent,
    MapaTiempoRealComponent,
    MapaHistoricoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCHImk9BEYh0Z27DT8OD-6wx6cRYNJSpcY',
      libraries: ['places']
    }),
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [ AppComponent
  ]
})
export class AppModule { }
