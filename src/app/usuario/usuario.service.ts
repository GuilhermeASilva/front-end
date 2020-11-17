import {
	HttpClient
} from '@angular/common/http';
import {
	Injectable
} from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class UsuarioService {

	constructor(private http: HttpClient) {}

	listarUsuarios = function () {
		return this.http.get('http://localhost:3333/users')
	}

	buscarUsuarioPorId = function (id: number) {
		return this.http.get(`http://localhost:3333/user/${id}`)
	}

	adicionarUsuario = function (user) {
		return this.http.post('http://localhost:3333/users', user)
	}

	atualizarUsuario = function (id: number, user) {
    // atualizarUsuario = function (user) {
      return this.http.put(`http://localhost:3333/user/${id}`, user)
		// return this.http.put('http://localhost:3333/user', user)
	}

	apagarUsuario = function (id: number) {
		return this.http.delete(`http://localhost:3333/user/${id}`)
	}
}
