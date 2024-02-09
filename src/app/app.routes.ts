import { Routes } from '@angular/router';
import { FichaPeliComponent } from './components/ficha-peli/ficha-peli.component';
import { PrincipalComponent } from './principal/principal.component';
import { Page404Component } from './components/page404/page404.component';

export const routes: Routes = [
    {path:'editar/:titulo',component:FichaPeliComponent},
    {path:'', component:PrincipalComponent},//Raiz
    {path:'**',component:Page404Component}//Cualquier petición no gestionada antes acaba aquí
];
