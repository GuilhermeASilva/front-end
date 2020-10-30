import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroClienteService {

  constructor(private http: HttpClient) { }

  adicionarCliente = function(customer) {
    console.log(customer)
    return this.http.post('http://localhost:3333/customers', customer)
    // console.log("add cliente serviço", douglas)
    // return this.http.post('http://localhost:3333/customers', client)
  }

  apagarCliente = function(customers) {
      customers = customers.filter(function(customer) {
        if (!customer.selected) return customer;
          return this.http.delete(`http://localhost:3333/customers/${customer.id}`)
      })
  }
}
