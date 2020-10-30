import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaFornecedorService {

  constructor(private http: HttpClient) {}

  buscarFornecedores = function () {
    return this.http.get('http://localhost:3333/suppliers')
  }
}


