import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {}

  buscarUsuarios = function () {
    return this.http.get('http://localhost:3333/users')
  }

  adicionarUsuario = function(user) {
    console.log(user)
    return this.http.post('http://localhost:3333/users', user)
}

  apagarUsuario = function(users) {
    users = users.filter(function(user) {
      if (!user.selected) return user;
        return this.http.delete(`http://localhost:3333/users/${user.id}`)
    })
  }
}
