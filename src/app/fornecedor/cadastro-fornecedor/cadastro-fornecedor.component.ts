import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationToastModel } from 'src/app/shared/notification-toast/notification-toast.model';
import { NotificationToastService } from 'src/app/shared/notification-toast/notification-toast.service';
import { EEstadosEnum } from 'src/app/utilities/enums/uf.enum';
import { FornecedorService } from '../fornecedor.service';

@Component({
  selector: 'app-cadastro-fornecedor',
  templateUrl: './cadastro-fornecedor.component.html',
  styleUrls: ['./cadastro-fornecedor.component.less'],
})
export class CadastroFornecedorComponent implements OnInit {
  message = 'Cadastro de Fornecedor';
  suppliers = [];
  supplier;
  supplierForm: FormGroup;
  loading = false;
  EEstados = EEstadosEnum;

  constructor(
    private fornecedorService: FornecedorService,
    private fb: FormBuilder,
    private router: Router,
    private notificationToastService: NotificationToastService
  ) {
    this.supplierForm = this.fb.group({
      razaoSocial: ['', [Validators.required]],
      cnpj: ['', [Validators.required]],
      nomeFantasia: ['', [Validators.required]],
      endereco: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      uf: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      email: ['', [Validators.required]],
      site: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  adicionarFornecedor() {
    if (this.supplierForm.invalid) {
      this.loading = true;
      this.notificationToastService.atencao(
        new NotificationToastModel('Verifique os campos!')
      );
      this.loading = false;
    } else {
      let form = this.supplierForm.controls;
      let supplier = {
        razaoSocial: form.razaoSocial.value,
        cnpj: form.cnpj.value,
        nomeFantasia: form.nomeFantasia.value,
        endereco: form.endereco.value,
        cidade: form.cidade.value,
        uf: form.uf.value,
        telefone: form.telefone.value,
        email: form.email.value,
        site: form.site.value,
      };
      this.fornecedorService.adicionarFornecedor(supplier).subscribe((res) => {
        if (res && res.status) {
          this.loading = false;
          this.notificationToastService.sucesso(
            new NotificationToastModel('Salvo com sucesso!')
          );
          this.router.navigateByUrl('suppliers');
        } else {
          this.notificationToastService.erro(
            new NotificationToastModel('Erro ao tentar salvar!')
          );
        }
      });
    }
    this.loading = false;
  }
}
