import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject = new BehaviorSubject<any>(null) //BehaviorSubject precisa de um valor inicial, nesse caso null
  private administrador = new BehaviorSubject<any>(null) //BehaviorSubject precisa de um valor inicial, nesse caso null

  constructor(private http : HttpClient) { }

  validaLogin(login: any) {
  return this.http.post('http://localhost:3333/login', login)
  }

  estaLogadoBolean(){
    return !!this.estaLogado()
  }

  estaLogado(){
    return this.userSubject.asObservable()
     // observable para que quem chamar conseguir fazer o subscribe
  }

  ehAdministrador(){
    return this.administrador.asObservable()
  }

  login(token, tipoUsuario) {
    localStorage.setItem('auth', JSON.stringify(token));
    localStorage.setItem('tipoUsuario', JSON.stringify(tipoUsuario));
    if(tipoUsuario == 'admin') this.administrador.next(true)
    else this.administrador.next(false)
  }

  logout() {
    localStorage.removeItem('auth');
    localStorage.removeItem('tipoUsuario');
    this.userSubject.next(false)
    this.administrador.next(false)
    // alert('Até mais!')
    // emite valor null
  }

  getToken(): string {
    const authData = JSON.parse(localStorage.getItem('auth'));
    if (authData) {
      this.userSubject.next(authData)
      // subject recebe o usuario decodificado e emite
      return authData;
    }
    return undefined;
  }
}
