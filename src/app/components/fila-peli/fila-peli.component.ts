import { Component, Input } from '@angular/core';
import { Pelicula } from '../../interfaces/pelicula';
import { GestorpeliculasService } from '../../services/gestorpeliculas.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fila-peli',
  standalone: true,
  imports: [ RouterModule, CommonModule ],
  templateUrl: './fila-peli.component.html',
  styleUrl: './fila-peli.component.css'
})
export class FilaPeliComponent {
  @Input() pelicula:Pelicula={};
  estilos:string[]=[];
  constructor(private gestorPeliculas:GestorpeliculasService){}
  public ngOnInit(){
    if (this.pelicula.anyo!<2000){
      this.estilos.push("descatalogada");
      this.estilos.push("cursiva");
    }
  }
  borrarPeli(titulo:string | undefined){
    this.gestorPeliculas.eliminarPelicula(titulo);
  }
}
