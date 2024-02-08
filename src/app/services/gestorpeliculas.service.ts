import { Injectable } from '@angular/core';
import { Pelicula } from '../interfaces/pelicula';

@Injectable({
  providedIn: 'root'
})
export class GestorpeliculasService {
  private peliculas:Pelicula[]=[];
  constructor() { }
  getPeliculas(){
    return this.peliculas;
  }
  agregarPelicula(nuevaPelicula:Pelicula){
    this.peliculas.push(nuevaPelicula);
  }
  eliminarPelicula(titulo:string){
    //TODO Programar
  }
  modificarPelicula(titulo:string, peliculaModificada:Pelicula){
    //TODO Programar
  }
}
