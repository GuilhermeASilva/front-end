import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ListaClienteService } from './lista-cliente.service';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.less']
})

export class ListaClienteComponent implements OnInit {

  customers = []
  selected = "selected"
  customer
  customerForm : FormGroup

  constructor(private listaClienteService : ListaClienteService, private fb : FormBuilder) {
    this.customerForm = this.fb.group({
      nome : [''],
      cpf : [''],
      dataNascimento  : [''],
      endereco : [''],
      cidade : [''],
      uf : [''],
      telefone : [''],
      sexo : [''],
      email : ['']
    })
   }

  ngOnInit(): void {
    this.buscarClientes()
  }

  buscarClientes() {
    this.listaClienteService.buscarClientes().subscribe(res => {
      this.customers = res.data
      // console.log(this.customers)
    })
  }

  temClienteSelecionado = function(customers) {
    return customers.some(function (customer){
        return customer.selected;
    })
  }
}