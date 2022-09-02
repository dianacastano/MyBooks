import { Component, OnInit } from '@angular/core';
import { Libro } from '../../models/libro';
import { LibrosService } from '../../shared/libro.service';

@Component({
  selector: 'app-modificar-libro',
  templateUrl: './modificar-libro.component.html',
  styleUrls: ['./modificar-libro.component.css']
})
export class ModificarLibroComponent implements OnInit {

  constructor(public librosService : LibrosService) { }

  editLibro(titulo : HTMLInputElement, tipo : HTMLInputElement, autor : HTMLInputElement, precio : HTMLInputElement, 
    photo : HTMLInputElement, codigo: HTMLInputElement) 
  {
    
    let libro = new Libro(titulo.value, tipo.value, autor.value, Number(precio.value),
      photo.value, Number(codigo.value));

    console.log(libro);

    this.librosService.edit(libro)
      
  }


  ngOnInit(): void {  }

}

