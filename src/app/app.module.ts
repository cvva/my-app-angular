import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { AtributoComponent } from './atributo/atributo.component';
import { FormsModule } from '@angular/forms';
import { EstructuralComponent } from './estructural/estructural.component';


@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    AtributoComponent,
    EstructuralComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
