import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrdemDeServicoService } from '../ordem-de-servico.service';

@Component({
  selector: 'app-cadastro-ordem-de-servico',
  templateUrl: './cadastro-ordem-de-servico.component.html',
  styleUrls: ['./cadastro-ordem-de-servico.component.less'],
})
export class CadastroOrdemDeServicoComponent implements OnInit {
  message = 'Cadastro de Ordem de Serviço';
  orders = [];
  order;
  orderForm: FormGroup;
  loading = false;

  constructor(
    private ordemDeServicoService: OrdemDeServicoService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.orderForm = this.fb.group({
      idCliente: ['', [Validators.required]],
      // idFuncionario: [''],
      itemsServico: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      dataEntrega: ['', [Validators.required]],
      // statusOs: ['', [Validators.required]],
      valor: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  adicionarOrdemDeServico() {
    if (this.orderForm.invalid) {
      // console.log(this.orderForm);
      this.loading = true;
      alert('Erro, favor verificar os dados enviados!');
      this.loading = false;
    } else {
      let form = this.orderForm.controls;
      // let itemsObj = [];
      // let items = form.itemsServico.value.split(';');
      // if (items[items.length - 1] == '') {
      //   items.pop();
      // }
      // items.forEach((item, posicao) => {
      //   if (posicao % 2 == 1) {
      //     itemsObj.push({
      //       name: items[posicao - 1],
      //       valor: item,
      //     });
      //   }
      // });
      let order = {
        idCliente: form.idCliente.value,
        idFuncionario: localStorage.getItem('id'),
        // itemsServico: itemsObj,
        itemsServico: form.itemsServico.value,
        categoria: form.categoria.value,
        descricao: form.descricao.value,
        dataEntrega: form.dataEntrega.value,
        // statusOs: form.statusOs.value,
        valor: form.valor.value,
      };
      console.log('Objeto enviado: ', order);
      this.ordemDeServicoService
        .adicionarOrdemDeServico(order)
        .subscribe((res) => {
          console.log(res)
          if (res && res.status) {
            this.loading = false;
            alert('Ordem de Serviço cadastrada com sucesso!');
            this.router.navigateByUrl('orders');
          }
        });
    }
    this.loading = false;
  }
}
