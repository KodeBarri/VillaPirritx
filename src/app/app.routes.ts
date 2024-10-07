import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdopcionComponent } from './pages/adopcion/adopcion.component';
import { SubidaComponent } from './pages/subida/subida.component';
import { GestionAdopcionesComponent } from './pages/gestion-adopciones/gestion-adopciones.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'adopcion', component: AdopcionComponent },
  { path: 'subida', component: SubidaComponent },
  { path: 'gestion-adopciones', component: GestionAdopcionesComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }  // Redirigir a home si no existe la ruta
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
