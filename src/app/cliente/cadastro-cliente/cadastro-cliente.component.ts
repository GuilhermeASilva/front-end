import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { ClienteService } from './cliente-service.service';

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

  constructor(private customereService: ClienteService, private fb : FormBuilder) {
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

      // get
      // let data = response.data.data;
      // for (let resp in data){
      //     customers.push(data[resp]);
      // }

      adicionarCliente() {
        let form = this.customerForm.controls
        console.log("Método add cliente", form)
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
        this.customereService.adicionarCliente(customer).subscribe(res => console.log(res, "Resposta POST"));
        // console.log(this.return);
      }

      buscarClientes() {
        // console.log("Chamando buscarClientes pelo TS");
        this.customereService.buscarClientes().subscribe(res => console.log(res));
      }


}
