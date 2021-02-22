import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleados } from '../interfaces/empleado.interface';
import { Employee } from '../models/Employed.model';
import { environment } from '../../environments/environment.prod';

@Injectable()

export class EmpleadosService {

    empleados: Employee[]
    empleadosMovs: []
    urlAPI: string
    urlServer: string

    constructor(private http: HttpClient) {
        this.urlAPI = environment.apiURL
        this.urlServer = environment.urlServer
    }

    getAllEmpleados(): Promise<Employee[]> {
        return this.http.get<Employee[]>(`${this.urlAPI}/employees`).toPromise()
    }

    getEmpleado(index): Promise<Employee> {
        return this.http.get<Employee>(`${this.urlAPI}/employee/${index}`).toPromise()
    }

    deleteEmpleado(index: number): Promise<any> {
        return this.http.delete(`${this.urlAPI}/delete/${index}`).toPromise()
    }


    searchEmpleados(value: string): Employee[] {
        const empleadosArr: Employee[] = [];
        this.getAllEmpleados()
            .then(response => {
                if (response['status'] === 'success') {
                    value = value.toLowerCase();
                    for (let i = 0; i < response['data'].length; i++) {
                        const empleado = response['data'][i];
                        const nombre = empleado['employee_name'].toLowerCase();
                        if (nombre.indexOf(value) >= 0) {
                            empleado.id = i + 1;
                            empleadosArr.push(empleado);
                        }
                    }
                }
            })
            .catch(error => {
                console.log(error)
            })
        return empleadosArr;
    }

}

