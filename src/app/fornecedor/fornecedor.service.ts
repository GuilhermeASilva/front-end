import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  constructor(private http: HttpClient) {}

  buscarFornecedores = function () {
    return this.http.get('http://localhost:3333/suppliers')
  }

  adicionarFornecedor = function(supplier) {
    console.log(supplier)
    return this.http.post('http://localhost:3333/suppliers', supplier)
}

  apagarFornecedor = function(suppliers) {
    suppliers = suppliers.filter(function(supplier) {
      if (!supplier.selected) return supplier;
        return this.http.delete(`http://localhost:3333/suppliers/${supplier.id}`)
    })
  }
}



