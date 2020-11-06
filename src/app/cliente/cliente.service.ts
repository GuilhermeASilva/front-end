import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  listarClientes = function () {
    return this.http.get('http://localhost:3333/customers')
  }

  buscarClientePorId = function (id : number) {
    return this.http.get(`http://localhost:3333/customer/${id}`)
  }

  adicionarCliente = function(customer) {
    return this.http.post('http://localhost:3333/customers', customer)
  }

  atualizarCliente = function(id: number, customer) {
    return this.http.put(`http://localhost:3333/customer/${id}`, customer)
  }

  apagarCliente = function(id : number) {
    return this.http.delete(`http://localhost:3333/customer/${id}`)
  }
}
