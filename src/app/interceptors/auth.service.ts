import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject = new BehaviorSubject<any>(null); //BehaviorSubject precisa de um valor inicial, nesse caso null
  private administrador = new BehaviorSubject<any>(null); //BehaviorSubject precisa de um valor inicial, nesse caso null

  constructor(private http: HttpClient) {}

  validaLogin(login: any) {
    return this.http.post('http://localhost:3333/login', login);
  }

  estaLogadoBolean() {
    return !!this.estaLogado();
  }

  estaLogado() {
    return this.userSubject.asObservable();
    // observable para que quem chamar conseguir fazer o subscribe
  }

  ehAdministrador() {
    return this.administrador.asObservable();
  }

  login(id, email, tipoUsuario, token) {
    localStorage.setItem('id', JSON.stringify(id));
    localStorage.setItem('email', JSON.stringify(email));
    localStorage.setItem('tipoUsuario', JSON.stringify(tipoUsuario));
    localStorage.setItem('auth', JSON.stringify(token));
    if (tipoUsuario == 'admin') this.administrador.next(true);
    else this.administrador.next(false);
  }

  logout() {
    localStorage.removeItem('id');
    localStorage.removeItem('email');
    localStorage.removeItem('tipoUsuario');
    localStorage.removeItem('auth');
    this.userSubject.next(false);
    this.administrador.next(false);
    // alert('Até mais!')
    // emite valor null
  }

  getAdmin() {
    return JSON.parse(localStorage.getItem('tipoUsuario')) == 'admin'
      ? true
      : false;
  }

  getToken(): string {
    const authData = JSON.parse(localStorage.getItem('auth'));
    if (authData) {
      this.userSubject.next(authData);
      // subject recebe o usuario decodificado e emite
      return authData;
    }
    return undefined;
  }
}
