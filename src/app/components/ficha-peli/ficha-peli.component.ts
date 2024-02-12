import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { Pelicula } from '../../interfaces/pelicula';
import { GestorpeliculasService } from '../../services/gestorpeliculas.service';

@Component({
  selector: 'app-ficha-peli',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './ficha-peli.component.html',
  styleUrl: './ficha-peli.component.css'
})
export class FichaPeliComponent {
  private titulo:string="";
  public pelicula:Pelicula|undefined;
  constructor(private ar:ActivatedRoute, private gp:GestorpeliculasService){
    this.ar.params.subscribe(params=>{
      this.titulo = params['titulo'];
      this.pelicula = this.gp.getPelicula(this.titulo);
      console.log(this.titulo);
    });
  }
}
