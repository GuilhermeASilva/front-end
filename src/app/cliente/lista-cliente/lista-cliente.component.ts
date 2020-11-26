import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.less'],
})
export class ListaClienteComponent implements OnInit {
  message = 'Clientes';
  customers = [];
  customersAux = [];
  customer;
  loading = false;

  constructor(private clienteService: ClienteService, private router: Router) {}

  ngOnInit(): void {
    this.loading = true;
    this.listarClientes();
  }

  listarClientes() {
    this.clienteService.listarClientes().subscribe((res) => {
      this.customers = res.data;
      this.customersAux = this.customers;
      this.loading = false;
    });
  }

  alterarCliente(id: number) {
    this.router.navigateByUrl(`customer/${id}`);
  }

  atualizarLista(lista) {
    this.customersAux = lista;
  }
}
