import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent },
  { path: 'empleados', component: EmpleadosComponent, canActivate: [AuthGuard] },
  { path: 'empleado/:id', component: EmpleadoComponent, canActivate: [AuthGuard] },
  { path: 'buscar/:value', component: BuscadorComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
