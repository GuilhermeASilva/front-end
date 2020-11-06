import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  constructor(private http: HttpClient) {}

  listarFornecedores = function () {
    return this.http.get('http://localhost:3333/suppliers')
  }

  buscarFornecedorPorId = function (id : number) {
    return this.http.get(`http://localhost:3333/supplier/${id}`)
  }

  adicionarFornecedor = function(supplier) {
    return this.http.post('http://localhost:3333/suppliers', supplier)
  }

  atualizarFornecedor = function(id: number, supplier) {
    return this.http.put(`http://localhost:3333/supplier/${id}`, supplier)
  }

  apagarCliente = function(id : number) {
    return this.http.delete(`http://localhost:3333/customer/${id}`)
  }
}



