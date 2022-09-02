import { Component, OnInit } from '@angular/core';
import { Libro } from '../../models/libro';
import { LibrosService } from '../../shared/libro.service';

@Component({
  selector: 'app-agregar-libro',
  templateUrl: './agregar-libro.component.html',
  styleUrls: ['./agregar-libro.component.css']
})
export class AgregarLibroComponent implements OnInit {

  constructor(public librosService: LibrosService) { }

  addLibro(titulo : HTMLInputElement, tipoLibro : HTMLInputElement, autor : HTMLInputElement, precio : HTMLInputElement, 
    photo : HTMLInputElement, codigo: HTMLInputElement) {
    
      let libro = new Libro(titulo.value, tipoLibro.value, autor.value, Number(precio.value),
          photo.value, Number(codigo.value))
      this.librosService.add(libro)
  }


  ngOnInit(): void {
  }

}
