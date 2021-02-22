import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadosService } from '../../services/empleado.service';

@Component({
  selector: 'app-empleado-tarjeta',
  templateUrl: './empleado-tarjeta.component.html',
  styleUrls: ['./empleado-tarjeta.component.css']
})
export class EmpleadoTarjetaComponent implements OnInit {

  @Input() empleado: any = {};
  @Input() index: number;

  @Output() empleadoSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.empleadoSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  viewEmpleado() {
    this.router.navigate(['/empleado', this.index]);
  }

}
