import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../interceptors/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private http: HttpClient, private authService : AuthService) {}
  // , private headers: HttpHeaders

  buscarUsuarios = function () {
    const tipoUsuario = JSON.parse(localStorage.getItem('tipoUsuario'));
    // console.log("Tipo usuário: ", this.tipoUsuario)
    // this.headers = headers.append('Accept', 'application/json');
    // return this.http.get(`http://localhost:3333/users?tipoUsuario=${tipoUsuario}`, Headers)
    return this.http.get(`http://localhost:3333/users?tipoUsuario=${tipoUsuario}`)
    // http://localhost:3333/users?tipoUsuario=admin
  }

  adicionarUsuario = function(user) {
    // console.log(user)
    return this.http.post('http://localhost:3333/users', user)
}

  apagarUsuario = function(users) {
    users = users.filter(function(user) {
      if (!user.selected) return user;
        return this.http.delete(`http://localhost:3333/users/${user.id}`)
    })
  }
}
