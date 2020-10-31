import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) {}

  buscarProdutos = function () {
    return this.http.get('http://localhost:3333/products')
  }

  adicionarProduto = function(product) {
    console.log(product)
    return this.http.post('http://localhost:3333/products', product)
}

  apagarProduto = function(products) {
    products = products.filter(function(product) {
      if (!product.selected) return product;
        return this.http.delete(`http://localhost:3333/products/${product.id}`)
    })
  }
}
