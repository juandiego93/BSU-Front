import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { EmpleadoTarjetaComponent } from './components/empleado-tarjeta/empleado-tarjeta.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { LoginComponent } from './components/login/login.component';

// import { EmployeeService } from 'src/app/services/employee.service';
import { EmpleadosService } from 'src/app/services/empleado.service';
import { AuthService } from 'src/app/services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    BuscadorComponent,
    EmpleadoTarjetaComponent,
    EmpleadoComponent,
    EmpleadosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    EmpleadosService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
