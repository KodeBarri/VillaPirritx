import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdopcionComponent } from './pages/adopcion/adopcion.component';
import { SubidaComponent } from './pages/subida/subida.component';
import { GestionAdopcionesComponent } from './pages/gestion-adopciones/gestion-adopciones.component';
import { ColaboraComponent } from './pages/colabora/colabora.component';
import { AboutComponent } from './pages/about/about.component';
import { ProyectoComponent } from './pages/proyecto/proyecto.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InteresComponent } from './pages/interes/interes.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'colabora', component: ColaboraComponent },
  { path: 'adopcion', component: AdopcionComponent },
  { path: 'proyecto', component: ProyectoComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'interes', component: InteresComponent },

  { path: 'subida', component: SubidaComponent },
  { path: 'gestion-adopciones', component: GestionAdopcionesComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }  // Redirigir a home si no existe la ruta
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
