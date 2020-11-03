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
    // console.log("add cliente serviço", douglas)
    // return this.http.post('http://localhost:3333/customers', client)
  }

  atualizarCliente = function(id: number, customer) {
    return this.http.put(`http://localhost:3333/customer/${id},`, customer)
  }

  apagarCliente = function(customers) {
    // Implementar
    //   customers = customers.filter(function(customer) {
    //     if (!customer.selected) return customer;
    //       return this.http.delete(`http://localhost:3333/customers/${customer.id}`)
    //   })
  }
}
