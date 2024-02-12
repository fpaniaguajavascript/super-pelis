import { Routes } from '@angular/router';
import { FichaPeliComponent } from './components/ficha-peli/ficha-peli.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { Page404Component } from './components/page404/page404.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    {path:'about',component:AboutComponent},
    {path:'acercade',redirectTo:'about'},
    {path:'editar/:titulo',component:FichaPeliComponent},
    {path:'', component:PrincipalComponent},//Raiz
    {path:'**',component:Page404Component}//Cualquier petición no gestionada antes acaba aquí
];
