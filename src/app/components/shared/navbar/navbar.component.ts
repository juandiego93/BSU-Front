import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  IsLogin: boolean

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.customLoginBehaviorSubject.subscribe(resp => this.IsLogin = resp)
  }

  buscarEmpleado(value) {
    this.router.navigate(['/buscar', value]);
  }


  Logout() {
    const user = this.authService.getDataInLocalStorage('user')
    console.log(user);
    this.authService.logoutUser()
    this.authService.changeValueLoginBehaviorSubject(false)
  }

}
