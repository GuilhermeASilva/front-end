import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrdemDeServicoService {
  constructor(private http: HttpClient) {}

  listarOrdensDeServico = function () {
    return this.http.get('http://localhost:3333/orders');
  };

  adicionarOrdemDeServico = function (order) {
    return this.http.post('http://localhost:3333/orders', order);
  };

  cancelarOrdemDeServico = function (id: number) {
    return this.http.post(`http://localhost:3333/order/cancel/${id}`);
  };

  atualizarOrdemDeServico = function (id: number, order) {
    return this.http.put(`http://localhost:3333/order/${id}`, order);
  };

  apagarOrdemDeServico = function (id: number) {
    return this.http.delete(`http://localhost:3333/order/${id}`);
  };

  //Aguardando criação da rota no backend
  // buscarOrdemDeServicoPorId = function (id: number) {
  //   return this.http.get(`http://localhost:3333/order/${id}`);
  // };
}
