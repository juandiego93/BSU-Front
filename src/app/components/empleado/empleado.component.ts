import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadosService } from 'src/app/services/empleado.service';
import * as alertify from 'alertifyjs'

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.scss']
})
export class EmpleadoComponent implements OnInit {

  empleado: any = {}
  classPok: string
  movement: {}

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private empleadoService: EmpleadosService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.empleadoService.getEmpleado(params['id'])
        .then(resp => {
          if (resp['status'] === "success") {
            this.empleado = resp['data']
          }
        })
        .catch(err => { console.log(err) })
    });
  }

  deleteEmployee(empleadoId: number) {
    const this_ = this
    alertify
      .confirm('Eliminar !!!', '¿ Desea eliminar este usuario ?',
        function () {
          this_.empleadoService.deleteEmpleado(empleadoId)
            .then(resp => {
              if (resp['status'] === "success") {
                alertify.success('Usuario eliminado')
                return this_.router.navigate(['/empleados']);
              }
            })
            .catch(err => {
              console.log(err)
              alertify.error('Ocurrío un Error')
            })
          // this.router.parseUrl('/empleados');
        },
        function () {
          alertify.error('Acción Candelada')
        });
  }

}
