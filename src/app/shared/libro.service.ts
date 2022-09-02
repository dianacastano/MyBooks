import { Injectable } from '@angular/core';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  private libros: Libro[];

  constructor() { 
    this.libros = [];
    // Para empezar con libros
    this.libros.push(new Libro("El tiempo entre costuras", "Tapa blanda", "Maria Dueñas", 
    17.99, "https://images-na.ssl-images-amazon.com/images/I/71k3KwMlt8L.jpg", 203075));
    this.libros.push(new Libro("El principito", "Tapa blanda", "Antoine De Saint", 
    7.99, "https://images-na.ssl-images-amazon.com/images/I/41N7hwEecEL._SX312_BO1,204,203,200_.jpg", 387256));
    this.libros.push(new Libro("Animales fantásticos: Los crimenes de Grindelwald", "Tapa blanda", "J.K. Rowling", 
    14.99, "https://images-na.ssl-images-amazon.com/images/I/51Fi00OKJSL._SX299_BO1,204,203,200_.jpg", 847182));
  }

public getAll(): Libro[] {
    return this.libros;
}

public getOne(id_libro: number): Libro {
    let result: Libro = null;
    let encontrado: boolean = false;
    let i: number = 0;
    while (i < this.libros.length && !encontrado) {
      if (this.libros[i].id_libro == id_libro) {
        result = this.libros[i];
        encontrado = true;
      }
      i++;
    };
    return result
}

  public add(libro: Libro): void {
    this.libros.push(libro)
  }

  public edit(libro: Libro): boolean {
    let editado: boolean = false;
    let i: number = 0;
    while (i < this.libros.length && !editado) {
      if (this.libros[i].id_libro == libro.id_libro) {
        this.libros[i] = libro
        editado = true;
      }
      i++;
    }
    return editado;
  }

  public delete(id_libro: number): boolean {
    let borrado: boolean = false;
    let i: number = 0;
    while (i < this.libros.length && !borrado) {
      if (this.libros[i].id_libro == id_libro) {
        this.libros.splice(i, 1);
        borrado = true;
      }
      i++;
    }
    return borrado;
  }
}