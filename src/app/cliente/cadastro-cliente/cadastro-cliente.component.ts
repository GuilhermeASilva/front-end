import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CorrigeData } from 'src/app/utilities/corrige-data';
import { EGeneroEnum } from 'src/app/utilities/enums/genero.enum';
import { EEstadosEnum } from 'src/app/utilities/enums/uf.enum';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.less'],
})
export class CadastroClienteComponent implements OnInit {
  message = 'Cadastro de Cliente';
  customers = [];
  customer;
  customerForm: FormGroup;
  loading = false;
  EGenero = EGeneroEnum
  EEstados = EEstadosEnum

  constructor(
    private clienteService: ClienteService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.customerForm = this.fb.group({
      nome: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      dataNascimento: ['', [Validators.required]],
      endereco: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      uf: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
      email: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    console.log(this.EGenero.members)
  }

  adicionarCliente() {
    if (this.customerForm.invalid) {
      this.loading = true;
      alert('Erro, favor verificar os dados enviados!');
      this.loading = false;
    } else {
      let form = this.customerForm.controls;
      let customer = {
        nome: form.nome.value,
        cpf: form.cpf.value,
        dataNascimento: CorrigeData.corrigeData(form.dataNascimento.value),
        endereco: form.endereco.value,
        cidade: form.cidade.value,
        uf: form.uf.value,
        telefone: form.telefone.value,
        email: form.email.value,
        sexo: form.sexo.value,
      };
      this.clienteService.adicionarCliente(customer).subscribe((res) => {
        this.loading = true;
        if (res && res.status) {
          this.loading = false;
          alert('Cliente cadastrado com sucesso!');
          this.router.navigateByUrl('customers');
        }
      });
    }
    this.loading = false;
  }
}
