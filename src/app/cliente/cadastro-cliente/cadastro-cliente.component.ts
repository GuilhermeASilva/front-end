import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.less']
})

export class CadastroClienteComponent implements OnInit {

  message = "Cadastro de Clientes";
  customers = [];
  class1 = "selected";
  customer
  customerForm : FormGroup

  constructor(private clienteService: ClienteService, private fb : FormBuilder, private router : Router) {
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
  }

      temClienteSelecionado = function(customers) {
          return customers.some(function (customer){
              return customer.selected;
          })
      }

      adicionarCliente() {
        let form = this.customerForm.controls
        let customer = {
          nome: form.nome.value,
          cpf: form.cpf.value,
          dataNascimento: form.dataNascimento.value,
          endereco: form.endereco.value,
          cidade: form.cidade.value,
          uf: form.uf.value,
          telefone: form.telefone.value,
          email: form.email.value,
          sexo: form.sexo.value
        }
        console.log("Objeto enviado: ", customer)
        this.clienteService.adicionarCliente(customer).subscribe(res => {
          if(res && res.status){
            // console.log("Retorno da deleção: ", res)
            //Adicionar notificação melhor
            alert("Cliente criado com sucesso!")
            this.router.navigateByUrl('customers')
          }
        });
      }
}
