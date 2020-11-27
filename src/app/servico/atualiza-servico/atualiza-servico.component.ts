import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationToastModel } from 'src/app/shared/notification-toast/notification-toast.model';
import { NotificationToastService } from 'src/app/shared/notification-toast/notification-toast.service';
import { ECategoriaServicoEnum } from 'src/app/utilities/enums/categoria-servico.enum';
import { ServicoService } from '../servico.service';

@Component({
  selector: 'app-atualiza-servico',
  templateUrl: './atualiza-servico.component.html',
  styleUrls: ['./atualiza-servico.component.less'],
})
export class AtualizaServicoComponent implements OnInit {
  message = 'Atualização de Serviço';
  serviceId: number;
  service;
  serviceForm: FormGroup;
  loading = false;
  modalUpdate = false;
  modalDelete = false;
  ECategoriaServico = ECategoriaServicoEnum;

  constructor(
    private activatedRoute: ActivatedRoute,
    private servicoService: ServicoService,
    private fb: FormBuilder,
    private router: Router,
    private notificationToastService: NotificationToastService
  ) {
    this.serviceForm = this.fb.group({
      nroServico: ['', [Validators.required]],
      nome: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      valor: ['', [Validators.required]],
      prazoDias: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.serviceId = parseInt(this.activatedRoute.snapshot.paramMap.get('id')); // Get ID value from route

    if (this.serviceId !== 0) {
      // se houver ID ele carrega
      this.loading = true;
      this.loadSupplier(this.serviceId); // Exibe dados no front
    }
  }

  loadSupplier(id: number) {
    this.servicoService.buscarServicoPorId(id).subscribe((res) => {
      this.service = res.data;
      this.preencheForm();
    });
  }

  preencheForm() {
    this.serviceForm.patchValue(this.service);
    this.loading = false;
  }

  atualizarServico(modalUpdate?) {
    if (!modalUpdate) this.exibeModalUpdate(!modalUpdate);
    else {
      let form = this.serviceForm.controls;
      let service = {
        nroServico: form.nroServico.value,
        nome: form.nome.value,
        descricao: form.descricao.value,
        valor: form.valor.value,
        prazoDias: form.prazoDias.value,
        categoria: form.categoria.value,
      };
      this.servicoService
        .atualizarServico(this.serviceId, service)
        .subscribe((res) => {
          if (res && res.status) {
            this.notificationToastService.sucesso(
              new NotificationToastModel('Salvo com sucesso!')
            );
            this.router.navigateByUrl('services');
          } else {
            this.notificationToastService.erro(
              new NotificationToastModel('Erro ao tentar salvar!')
            );
          }
        });
      this.exibeModalUpdate(modalUpdate);
    }
  }

  apagarServico(modalDelete?) {
    if (!modalDelete) this.exibeModalDelete(!modalDelete);
    else {
      this.servicoService.apagarServico(this.serviceId).subscribe((res) => {
        if (
          res &&
          res.message &&
          res.message == 'Serviço deletado com sucesso'
        ) {
          this.notificationToastService.sucesso(
            new NotificationToastModel('Serviço deletado com sucesso!')
          );
          this.router.navigateByUrl('services');
          this.exibeModalDelete(modalDelete);
        } else {
          this.notificationToastService.erro(
            new NotificationToastModel('Erro ao tentar deletar!')
          );
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
