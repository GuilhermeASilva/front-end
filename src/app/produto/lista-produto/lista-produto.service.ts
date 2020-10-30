import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaProdutoService {

  constructor(private http: HttpClient) {}

  buscarProdutos = function () {
    return this.http.get('http://localhost:3333/products')
  }
}


