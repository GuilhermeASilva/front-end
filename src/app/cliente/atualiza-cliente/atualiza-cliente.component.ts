import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormatDate } from 'src/app/utilities/format-date';
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
  loading = false

  constructor(private activatedRoute : ActivatedRoute, private clienteService : ClienteService, private fb : FormBuilder, private router: Router) {
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
        this.loading = true
        this.loadCustomer(this.customerId) // Exibe dados no front
      }
  }

 loadCustomer(id: number) {
    this.clienteService.buscarClientePorId(id).subscribe(res => {
      this.customer = res.data
      this.customer.dataNascimento = FormatDate.timestampToDate(this.customer.dataNascimento)
      this.preencheForm()
    })
  }

  preencheForm() {
    this.customerForm.patchValue(this.customer)
    this.loading = false
  }

  atualizarCliente() {
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
    // console.log("Objeto enviado: ", this.customerId, customer);
    this.clienteService.atualizarCliente(this.customerId, customer).subscribe(res => {
      if(res && res.status){
        // console.log("Retorno da deleção: ", res)
        //Adicionar notificação melhor
        alert("Cliente alterado com sucesso!")
        this.router.navigateByUrl('customers')
      }
    });
    }

  apagarCliente(){
    this.clienteService.apagarCliente(this.customerId).subscribe(res => {
      if(res && res.message && res.message == "Cliente deletado"){
        // console.log("Retorno da deleção: ", res)
        //Adicionar notificação melhor
        alert("Cliente apagado com sucesso!")
        this.router.navigateByUrl('customers')
      }
    })
  }
}
