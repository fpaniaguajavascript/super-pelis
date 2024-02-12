import { Component } from '@angular/core';
import { GestorpeliculasService } from '../../services/gestorpeliculas.service';
import { Pelicula } from '../../interfaces/pelicula';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css'
})
export class EditorComponent {
  listaPeliculas:Pelicula[];
  constructor(private gps:GestorpeliculasService){
    this.listaPeliculas = this.gps.getPeliculas();
  }

}
