import { Injectable } from '@angular/core';
import { Pelicula } from '../interfaces/pelicula';

@Injectable({
  providedIn: 'root'
})
export class GestorpeliculasService {
  private peliculas:Pelicula[]=[];
  constructor() { 
    //Recuperamos las películas
    let peliculasAlmacenadas = localStorage.getItem("peliculas");
    if (peliculasAlmacenadas!=null){
      this.peliculas = JSON.parse(peliculasAlmacenadas);
    }
  }
  getPeliculas(){
    return this.peliculas;
  }
  agregarPelicula(nuevaPelicula:Pelicula){
    this.peliculas.push(nuevaPelicula);
    guardarPeliculas(this.peliculas);
  }
  eliminarPelicula(titulo:string|undefined){
    let indexABorrar = this.peliculas.findIndex(pelicula => pelicula.titulo===titulo);
    this.peliculas.splice(indexABorrar, 1);
    guardarPeliculas(this.peliculas);
  }
  modificarPelicula(titulo:string, peliculaModificada:Pelicula){
    //TODO Programar
  }
}
function guardarPeliculas(peliculas:Pelicula[]){
  localStorage.setItem("peliculas",JSON.stringify(peliculas));
}