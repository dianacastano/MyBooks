import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FormularioRegistroComponent } from './component/formulario-registro/formulario-registro.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { FormularioLibroComponent } from './component/formulario-libro/formulario-libro.component';
import { RefPipe } from './pipes/ref.pipe';
import { Libros1Component } from './pages/libros1/libros1.component'
import { HttpClientModule } from '@angular/common/http';
import { AgregarLibroComponent } from './pages/agregar-libro/agregar-libro.component';
import { ModificarLibroComponent } from './pages/modificar-libro/modificar-libro.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FormularioRegistroComponent,
    RegistroComponent,
    PerfilComponent,    
    FormularioLibroComponent,
    RefPipe,
    Libros1Component,
    AgregarLibroComponent,
    ModificarLibroComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
