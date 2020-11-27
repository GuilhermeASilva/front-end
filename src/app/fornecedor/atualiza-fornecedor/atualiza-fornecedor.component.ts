import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationToastModel } from 'src/app/shared/notification-toast/notification-toast.model';
import { NotificationToastService } from 'src/app/shared/notification-toast/notification-toast.service';
import { EEstadosEnum } from 'src/app/utilities/enums/uf.enum';
import { FornecedorService } from '../fornecedor.service';

@Component({
  selector: 'app-atualiza-fornecedor',
  templateUrl: './atualiza-fornecedor.component.html',
  styleUrls: ['./atualiza-fornecedor.component.less'],
})
export class AtualizaFornecedorComponent implements OnInit {
  message = 'Atualização de Fornecedor';
  supplierId: number;
  supplier;
  supplierForm: FormGroup;
  loading = false;
  modalUpdate = false;
  modalDelete = false;
  EEstados = EEstadosEnum;

  constructor(
    private activatedRoute: ActivatedRoute,
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

  ngOnInit(): void {
    this.supplierId = parseInt(this.activatedRoute.snapshot.paramMap.get('id')); // Get ID value from route

    if (this.supplierId !== 0) {
      // se houver ID ele carrega
      this.loading = true;
      this.loadSupplier(this.supplierId); // Exibe dados no front
    }
  }

  loadSupplier(id: number) {
    this.fornecedorService.buscarFornecedorPorId(id).subscribe((res) => {
      this.supplier = res.data;
      this.preencheForm();
    });
  }

  preencheForm() {
    this.supplierForm.patchValue(this.supplier);
    this.loading = false;
  }

  atualizarFornecedor(modalUpdate?) {
    if (!modalUpdate) this.exibeModalUpdate(!modalUpdate);
    else {
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
      // console.log("Objeto enviado: ", supplier)
      this.fornecedorService
        .atualizarFornecedor(this.supplierId, supplier)
        .subscribe((res) => {
          if (res && res.status) {
            this.notificationToastService.sucesso(new NotificationToastModel('Salvo com sucesso!'))
            this.router.navigateByUrl('suppliers');
          } else {
            this.notificationToastService.erro(new NotificationToastModel('Erro ao tentar salvar!'))
          }
        });
      this.exibeModalUpdate(modalUpdate);
    }
  }

  apagarFornecedor(modalDelete?) {
    if (!modalDelete) this.exibeModalDelete(!modalDelete);
    else {
      this.fornecedorService
        .apagarFornecedor(this.supplierId)
        .subscribe((res) => {
          if (res && res.message && res.message == 'Fornecedor deletado') {
            this.notificationToastService.sucesso(new NotificationToastModel('Deletado com sucesso!'))
            this.router.navigateByUrl('suppliers');
            this.exibeModalDelete(modalDelete);
          } else {
            this.notificationToastService.erro(new NotificationToastModel('Erro ao tentar deletar!'))
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
