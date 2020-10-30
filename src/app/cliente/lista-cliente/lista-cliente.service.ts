import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaClienteService {

  constructor(private http: HttpClient) {}

  buscarClientes = function () {
    return this.http.get('http://localhost:3333/customers')
  }
}


