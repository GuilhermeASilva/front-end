import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  constructor(private http: HttpClient) {}

  buscarServicos = function () {
    return this.http.get('http://localhost:3333/services')
  }

  adicionarServico = function(service) {
    console.log(service)
    return this.http.post('http://localhost:3333/services', service)
}

  apagarServico = function(services) {
    services = services.filter(function(service) {
      if (!service.selected) return service;
        return this.http.delete(`http://localhost:3333/services/${service.id}`)
    })
  }
}

