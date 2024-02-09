import { Component, Input } from '@angular/core';
import { Pelicula } from '../../interfaces/pelicula';

@Component({
  selector: 'app-fila-peli',
  standalone: true,
  imports: [],
  templateUrl: './fila-peli.component.html',
  styleUrl: './fila-peli.component.css'
})
export class FilaPeliComponent {
  @Input() pelicula:Pelicula={};
  borrarPeli(titulo:string | undefined){
    console.log(titulo);
  }
}
