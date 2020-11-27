import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationToastModel } from 'src/app/shared/notification-toast/notification-toast.model';
import { NotificationToastService } from 'src/app/shared/notification-toast/notification-toast.service';
import { CorrigeData } from 'src/app/utilities/corrige-data';
import { ECategoriaServicoEnum } from 'src/app/utilities/enums/categoria-servico.enum';
import { EStatusOsEnum } from 'src/app/utilities/enums/status-os.enum';
import { FormatDate } from 'src/app/utilities/format-date';
import { OrdemDeServicoService } from '../ordem-de-servico.service';

@Component({
  selector: 'app-atualiza-ordem-de-servico',
  templateUrl: './atualiza-ordem-de-servico.component.html',
  styleUrls: ['./atualiza-ordem-de-servico.component.less'],
})
export class AtualizaOrdemDeServicoComponent implements OnInit {
  message = 'Atualização de OS';
  orderId: number;
  order;
  orderForm: FormGroup;
  loading = false;
  modalUpdate = false;
  modalDelete = false;
  EStatusOs = EStatusOsEnum;
  ECategoriaServico = ECategoriaServicoEnum;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ordemDeServicoService: OrdemDeServicoService,
    private fb: FormBuilder,
    private router: Router,
    private notificationToastService: NotificationToastService
  ) {
    this.orderForm = this.fb.group({
      // idCliente: ['', [Validators.required]],
      // idFuncionario: [''],
      itemsServico: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      dataEntrega: ['', [Validators.required]],
      statusOs: ['', [Validators.required]],
      valor: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.orderId = parseInt(this.activatedRoute.snapshot.paramMap.get('id')); // Get ID value from route

    if (this.orderId !== 0) {
      // se houver ID ele carrega
      this.loading = true;
      this.loadOrder(this.orderId); // Exibe dados no front
    }
  }

  loadOrder(id: number) {
    this.ordemDeServicoService
      .buscarOrdemDeServicoPorId(id)
      .subscribe((res) => {
        this.order = res.order;
        this.order.dataEntrega = FormatDate.timestampToDate(
          this.order.dataEntrega
        );
        this.preencheForm();
      });
  }

  preencheForm() {
    this.orderForm.patchValue(this.order);
    this.loading = false;
  }

  atualizarOrdemDeServico(modalUpdate?) {
    if (!modalUpdate) this.exibeModalUpdate(!modalUpdate);
    else {
      let form = this.orderForm.controls;
      let order = {
        // idCliente: form.idCliente.value,
        // idFuncionario: form.idFuncionario.value,
        // idFuncionario: localStorage.getItem('id'),
        // itemsServico: itemsObj,
        itemsServico: form.itemsServico.value,
        categoria: form.categoria.value,
        descricao: form.descricao.value,
        dataEntrega: CorrigeData.corrigeData(form.dataEntrega.value),
        statusOs: form.statusOs.value,
        valor: form.valor.value,
      };
      this.ordemDeServicoService
        .atualizarOrdemDeServico(this.orderId, order)
        .subscribe((res) => {
          if (res && res.status) {
            this.notificationToastService.sucesso(
              new NotificationToastModel('Salvo com sucesso!')
            );
            this.router.navigateByUrl('orders');
          }
        });
      this.exibeModalUpdate(modalUpdate);
    }
  }

  apagarOrdemDeServico(modalDelete?) {
    if (!modalDelete) this.exibeModalDelete(!modalDelete);
    else {
      this.ordemDeServicoService
        .apagarOrdemDeServico(this.orderId)
        .subscribe((res) => {
          if (
            res &&
            res.message &&
            res.message == 'Ordem de serviço deletada com sucesso.'
          ) {
            this.notificationToastService.sucesso(
              new NotificationToastModel('OS apagada com sucesso!')
            );
            this.router.navigateByUrl('orders');
            this.exibeModalDelete(modalDelete);
          } else {
            this.notificationToastService.erro(
              new NotificationToastModel('Erro ao tentar apagar OS!')
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
