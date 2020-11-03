import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from '../cliente.service';

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

  constructor(private clienteService : ClienteService, private fb : FormBuilder, private router : Router) {
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
    this.listarClientes()
  }

  listarClientes() {
    this.clienteService.listarClientes().subscribe(res => {
      this.customers = res.data
    })
  }

  alterarCliente(id : number) {
    this.router.navigateByUrl(`customer/${id}`)
  }

  temClienteSelecionado = function(customers) {
    return customers.some(function (customer){
        return customer.selected;
    })
  }
}
