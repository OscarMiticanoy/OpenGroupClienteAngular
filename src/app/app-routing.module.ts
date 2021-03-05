import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { EditarComponent } from './views/editar/editar.component';
import { NuevoComponent } from './views/nuevo/nuevo.component';


const routes: Routes = [
  { path:'', redirectTo:'dashboard', pathMatch:'full'},
  { path:'dashboard', component:DashboardComponent},
  { path:'nuevo', component:NuevoComponent},
  { path:'editar/:id', component:EditarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [DashboardComponent, NuevoComponent, EditarComponent]
