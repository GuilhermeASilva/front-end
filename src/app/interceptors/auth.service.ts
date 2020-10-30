import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject = new BehaviorSubject<any>(null) //BehaviorSubject precisa de um valor inicial, nesse caso null

  constructor(private http : HttpClient) { }

  validaLogin(login: any) {
  return this.http.post('http://localhost:3333/login', login)
  }

  estaLogado(){
    return this.userSubject.asObservable()
     // observable para que quem chamar conseguir fazer o subscribe
  }

  login(token) {
    localStorage.setItem('auth', JSON.stringify(token));
  }

  logout() {
    localStorage.removeItem('auth');
    this.userSubject.next(null)
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
