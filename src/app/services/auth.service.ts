import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs';
import { Login } from '../interface/Login.interface';
import { environment } from '../../environments/environment.prod';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlServer: string
  private loginBehaviorSubject: BehaviorSubject<boolean> = new BehaviorSubject(this.activeSession())
  public customLoginBehaviorSubject = this.loginBehaviorSubject.asObservable()

  constructor(private http: HttpClient, private router: Router) {
    this.urlServer = environment.urlServer
  }

  public changeValueLoginBehaviorSubject(value: boolean) {
    this.loginBehaviorSubject.next(value)
  }

  activeSession(): boolean {
    const dataInstorage = {
      user: this.getDataInLocalStorage('user'),
      token: this.getDataInLocalStorage('token')
    }
    if (dataInstorage.token && dataInstorage.user) return true
    else return false
  }

  loginUser(userLogin: Login): Promise<any> {
    return this.http.post(`${this.urlServer}/login`, userLogin).toPromise()
  }

  logoutUser() {
    this.clearStorage()
    return this.router.parseUrl('/login');
  }

  getDataInLocalStorage(key: string) {
    return localStorage.getItem(key) ? localStorage.getItem(key) : null
  }

  setDataInLocalStorage(variableName: string, data: string) {
    localStorage.setItem(variableName, data)
  }

  getToken() {
    return localStorage.getItem('token')
  }

  clearStorage() {
    localStorage.clear()
  }

}
