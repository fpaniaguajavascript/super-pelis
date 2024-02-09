import { Component } from '@angular/core';
import { FilaPeliComponent } from "../fila-peli/fila-peli.component";
import { GestorpeliculasService } from '../../services/gestorpeliculas.service';
import { Pelicula } from '../../interfaces/pelicula';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-listado-pelis',
    standalone: true,
    templateUrl: './listado-pelis.component.html',
    styleUrl: './listado-pelis.component.css',
    imports: [FilaPeliComponent, CommonModule]
})
export class ListadoPelisComponent {
    listaPeliculas:Pelicula[];
    constructor(private servicioPeliculas:GestorpeliculasService){
        this.listaPeliculas=servicioPeliculas.getPeliculas();   
    }
}
