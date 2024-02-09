import { Component } from '@angular/core';
import { FormularioComponent } from "../components/formulario/formulario.component";
import { ListadoPelisComponent } from "../components/listado-pelis/listado-pelis.component";

@Component({
    selector: 'app-principal',
    standalone: true,
    templateUrl: './principal.component.html',
    styleUrl: './principal.component.css',
    imports: [FormularioComponent, ListadoPelisComponent]
})
export class PrincipalComponent {

}
