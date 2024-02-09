import { Component, Input } from '@angular/core';
import { Pelicula } from '../../interfaces/pelicula';
import { GestorpeliculasService } from '../../services/gestorpeliculas.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-fila-peli',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './fila-peli.component.html',
  styleUrl: './fila-peli.component.css'
})
export class FilaPeliComponent {
  @Input() pelicula:Pelicula={};
  constructor(private gestorPeliculas:GestorpeliculasService){}
  borrarPeli(titulo:string | undefined){
    this.gestorPeliculas.eliminarPelicula(titulo);
  }
}
