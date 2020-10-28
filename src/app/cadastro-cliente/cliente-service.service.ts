import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  adicionarCliente = function(client) {
    return this.http.post('http://localhost:3333/costumers', client)
  }

  apagarCliente = function(clients) {
      clients = clients.filter(function(client) {
        if (!client.selected) return client;
          return this.http.delete(`http://localhost:3333/costumer/${client.id}`)
      })
  }

  buscarClientes = function () {
    console.log("Douglas maravilhoso");
    return this.http.get('http://localhost:3333/costumers')
  }

}
