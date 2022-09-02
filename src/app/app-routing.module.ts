import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarLibroComponent } from './pages/agregar-libro/agregar-libro.component';
import { HomeComponent } from './pages/home/home.component';
import { Libros1Component } from './pages/libros1/libros1.component';
import { ModificarLibroComponent } from './pages/modificar-libro/modificar-libro.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RegistroComponent } from './pages/registro/registro.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path:"registro", component: RegistroComponent},
  {path:"perfil", component: PerfilComponent},
  {path: "libros1", component: Libros1Component},
  {path: "agregar-libro", component: AgregarLibroComponent},
  {path: "modificar-libro", component: ModificarLibroComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
