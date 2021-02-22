import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpleadosService } from '../../services/empleado.service';
import { Employee } from '../../models/Employed.model';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ],
})
export class BuscadorComponent implements OnInit {

  empleados: Employee[] = [];
  value: string;

  constructor(private activatedRoute: ActivatedRoute, private empleadoServices: EmpleadosService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.value = params['value'];
      this.empleados = this.empleadoServices.searchEmpleados(this.value);
    });
  }

}
