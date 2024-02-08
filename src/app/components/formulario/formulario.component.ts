import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';import { Pelicula } from '../../interfaces/pelicula';
import { GestorpeliculasService } from '../../services/gestorpeliculas.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  pelicula:Pelicula={};
  constructor(private servicioPeliculas:GestorpeliculasService){
  }
  agregarPelicula(){
    console.log("Agregando película...");
    this.servicioPeliculas.agregarPelicula({...this.pelicula});
  }
}
