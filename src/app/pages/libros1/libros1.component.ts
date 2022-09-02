import { Component, OnInit } from '@angular/core';
import { Libro } from '../../models/libro';
import { LibrosService } from '../../shared/libro.service';

@Component({
  selector: 'app-libros1',
  templateUrl: './libros1.component.html',
  styleUrls: ['./libros1.component.css']
})
export class Libros1Component implements OnInit {

  public libros: Libro[];

  constructor(private ls: LibrosService) { 
    this.libros = this.ls.getAll();
  }

  ngOnInit(): void {
  }

  buscarLibro(id_libro: number): void {
    if(!id_libro) {
      this.libros = this.ls.getAll()
    } else {
      let libro: Libro = this.ls.getOne(id_libro);
      if (!libro) {
        this.libros = [];
      } else {
        this.libros = [libro]
      }
    }
  }
  borrarLibro(id_libro: number): void {
    this.ls.delete(id_libro);
    this.libros = this.ls.getAll();
  }
}
