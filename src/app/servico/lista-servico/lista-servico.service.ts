import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaServicoService {

  constructor(private http: HttpClient) {}

  buscarServicos = function () {
    return this.http.get('http://localhost:3333/services')
  }
}


