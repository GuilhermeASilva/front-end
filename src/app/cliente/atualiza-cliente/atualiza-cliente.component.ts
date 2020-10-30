import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-atualiza-cliente',
  templateUrl: './atualiza-cliente.component.html',
  styleUrls: ['./atualiza-cliente.component.less']
})
export class AtualizaClienteComponent implements OnInit {

  customerId : number
  customer
  customerForm : FormGroup

  constructor(private activatedRoute : ActivatedRoute, private clienteService : ClienteService, private fb : FormBuilder) {
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
      this.customerId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'), 10) // Get ID value from route

      if (this.customerId !== 0) { // se houver ID ele carrega
        this.loadCustomer(this.customerId) // Exibe dados no front
      }
  }

  loadCustomer(id : number) {
    this.clienteService.buscarClientes().subscribe(clientes => {
      if(clientes) {
        clientes.data.forEach(cliente => {
          if(cliente.id === id) {
            this.customer = cliente
            this.preencheForm()
          }
        })
      }
    })
  }

  preencheForm() {
    this.customerForm.patchValue(this.customer)
  }

  atualizarCliente() {

  }
}
