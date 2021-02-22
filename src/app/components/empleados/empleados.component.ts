import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from 'src/app/services/empleado.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})

export class EmpleadosComponent implements OnInit {

  empleados: {}[];

  constructor(private empleadosService: EmpleadosService, private router: Router) {
  }

  ngOnInit(): void {
    this.empleadosService.getAllEmpleados()
      .then(empleados_ => {
        if (empleados_['status'] === 'success') {
          this.empleados = empleados_['data']
        }
      })
      .catch(err => { console.log(err) })
  }

  viewEmpleado(index) {
    this.router.navigate(['/empleado', index]);
  }


}
