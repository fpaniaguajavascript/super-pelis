import { Component } from '@angular/core';
import { FormularioComponent } from "../formulario/formulario.component";
import { ListadoPelisComponent } from "../listado-pelis/listado-pelis.component";

@Component({
    selector: 'app-principal',
    standalone: true,
    templateUrl: './principal.component.html',
    styleUrl: './principal.component.css',
    imports: [FormularioComponent, ListadoPelisComponent]
})
export class PrincipalComponent {

}
