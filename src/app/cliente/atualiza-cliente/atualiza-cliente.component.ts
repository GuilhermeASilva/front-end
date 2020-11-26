import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CorrigeData } from 'src/app/utilities/corrige-data';
import { FormatDate } from 'src/app/utilities/format-date';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-atualiza-cliente',
  templateUrl: './atualiza-cliente.component.html',
  styleUrls: ['./atualiza-cliente.component.less'],
})
export class AtualizaClienteComponent implements OnInit {
  message = 'Atualização de Cliente';
  entidade = 'Cliente';
  customerId: number;
  customer;
  customerForm: FormGroup;
  loading = false;
  modalUpdate = false;
  modalDelete = false;

  constructor(
    private activatedRoute: ActivatedRoute,
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
    this.customerId = parseInt(this.activatedRoute.snapshot.paramMap.get('id')); // Get ID value from route

    if (this.customerId !== 0) {
      // se houver ID ele carrega
      this.loading = true;
      this.loadCustomer(this.customerId); // Exibe dados no front
    }
  }

  loadCustomer(id: number) {
    this.clienteService.buscarClientePorId(id).subscribe((res) => {
      this.customer = res.data;
      this.customer.dataNascimento = FormatDate.timestampToDate(
        this.customer.dataNascimento
      );
      this.preencheForm();
    });
  }

  preencheForm() {
    this.customerForm.patchValue(this.customer);
    this.loading = false;
  }

  atualizarCliente(modalUpdate?) {
    if (!modalUpdate) this.exibeModalUpdate(!modalUpdate);
    else {
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
      this.clienteService
        .atualizarCliente(this.customerId, customer)
        .subscribe((res) => {
          if (res && res.status) {
            alert('Cliente alterado com sucesso!');
            this.router.navigateByUrl('customers');
          }
        });
      this.exibeModalUpdate(modalUpdate);
    }
  }

  apagarCliente(modalDelete?) {
    if (!modalDelete) this.exibeModalDelete(!modalDelete);
    else {
      this.clienteService.apagarCliente(this.customerId).subscribe((res) => {
        if (res && res.message && res.message == 'Cliente deletado') {
          alert('Cliente apagado com sucesso!');
          this.router.navigateByUrl('customers');
          this.exibeModalDelete(modalDelete);
        }
      });
    }
  }

  exibeModalUpdate(fechar?) {
    if (fechar) this.modalUpdate = false;
    else this.modalUpdate = true;
  }

  exibeModalDelete(fechar?) {
    if (fechar) this.modalDelete = false;
    else this.modalDelete = true;
  }
}
