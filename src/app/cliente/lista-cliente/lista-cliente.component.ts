import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ListaClienteService } from './lista-cliente.service';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.less']
})
export class ListaClienteComponent implements OnInit {

  message = "Cadastro de Clientes";
  customers = [];
  class1 = "selected";
  customer
  customerForm : FormGroup

  constructor(private listaClienteService : ListaClienteService) { }

  ngOnInit(): void {
  }

  buscarClientes() {
    this.listaClienteService.buscarClientes().subscribe(res => console.log(res));
  }

}
