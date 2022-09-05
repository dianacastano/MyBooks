import { Component, OnInit } from '@angular/core';
import { Libro } from '../../models/libro';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  public libros: Libro[];

  constructor() { 
    this.libros = [];

    // Para empezar con libros
    this.libros.push(new Libro("Harry Potter y la Piedra Filosofal", "Tapa blanda", "J.K. Rowling",
    17.99, "https://images-na.ssl-images-amazon.com/images/I/91R1AixEiLL.jpg", 203075));
    this.libros.push(new Libro("Animales Fantásticos y Dónde Encontrarlos", "Tapa dura", "Newt Scamander",
    9.99, "https://images-na.ssl-images-amazon.com/images/I/41V5ZbZpVHL._SX322_BO1,204,203,200_.jpg", 203077));
    this.libros.push(new Libro("Harry Potter y el Prisionero de Azcaban", "Tapa blanda", "J.K. Rowling",
    15.99, "https://images-na.ssl-images-amazon.com/images/I/41G6AGP-QHL._SX303_BO1,204,203,200_.jpg", 203076));
    this.libros.push(new Libro("El tiempo entre costuras", "Tapa blanda", "Maria Dueñas", 
    17.99, "https://images-na.ssl-images-amazon.com/images/I/71k3KwMlt8L.jpg", 203078));
    this.libros.push(new Libro("El principito", "Tapa blanda", "Antoine De Saint", 
    7.99, "https://images-na.ssl-images-amazon.com/images/I/41N7hwEecEL._SX312_BO1,204,203,200_.jpg", 387256));
    
  }

  ngOnInit(): void {
  }

  agregarLibro(titulo: string, tipo: string, autor: string, precio: number, photo: string, codigo: number) {
    let nuevoLibro = new Libro(titulo, tipo, autor, precio, photo, codigo);
    this.libros.push(nuevoLibro)
  }
}
