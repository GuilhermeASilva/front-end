import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  constructor(private http: HttpClient) {}

  listarProdutos = function () {
    return this.http.get('http://localhost:3333/products');
  };

  buscarProdutoPorId = function (id: number) {
    return this.http.get(`http://localhost:3333/product/${id}`);
  };

  adicionarProduto = function (product) {
    return this.http.post('http://localhost:3333/products', product);
  };

  atualizarProduto = function (id: number, product) {
    return this.http.put(`http://localhost:3333/product/${id}`, product);
  };

  apagarProduto = function (id: number) {
    return this.http.delete(`http://localhost:3333/product/${id}`);
  };
}
