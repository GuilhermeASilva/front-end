import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  validaLogin(login: any) {
  return this.http.post('http://localhost:3333/login', login)
  }

  login(token) {
    localStorage.setItem('auth', JSON.stringify(token));
  }

  getToken(): string {
    const authData = JSON.parse(localStorage.getItem('auth'));
    if (authData) {
      return authData;
    }
    return undefined;
  }

}
