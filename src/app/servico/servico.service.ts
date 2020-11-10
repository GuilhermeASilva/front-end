import {
	HttpClient
} from '@angular/common/http';
import {
	Injectable
} from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ServicoService {

	constructor(private http: HttpClient) {}

	listarServicos = function () {
		return this.http.get('http://localhost:3333/services')
	}

	buscarServicoPorId = function (id: number) {
		return this.http.get(`http://localhost:3333/service/${id}`)
	}

	adicionarServico = function (service) {
		return this.http.post('http://localhost:3333/services', service)
	}

	atualizarServico = function (id: number, service) {
		return this.http.put(`http://localhost:3333/service/${id}`, service)
	}

	apagarServico = function (id: number) {
		return this.http.delete(`http://localhost:3333/service/${id}`)
	}
}
