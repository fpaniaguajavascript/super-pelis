import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-ficha-peli',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './ficha-peli.component.html',
  styleUrl: './ficha-peli.component.css'
})
export class FichaPeliComponent {
  private titulo:string="";
  constructor(private ar:ActivatedRoute){

  }
  ngOnInit():void {
    this.ar.params.subscribe(params=>{
      this.titulo = params['titulo'];
      console.log(this.titulo);
    });
  }
}
