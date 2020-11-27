import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationToastModel } from 'src/app/shared/notification-toast/notification-toast.model';
import { NotificationToastService } from 'src/app/shared/notification-toast/notification-toast.service';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.less'],
})
export class CadastroProdutoComponent implements OnInit {
  message = 'Cadastro de Produto';
  products = [];
  product;
  productForm: FormGroup;
  loading = false;

  constructor(
    private produtoService: ProdutoService,
    private fb: FormBuilder,
    private router: Router,
    private notificationToastService: NotificationToastService
  ) {
    this.productForm = this.fb.group({
      nome: ['', [Validators.required]],
      marca: ['', [Validators.required]],
      preco: ['', [Validators.required]],
      codBarras: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  adicionarProduto() {
    if (this.productForm.invalid) {
      this.loading = true;
      this.notificationToastService.atencao(
        new NotificationToastModel('Verifique os campos!')
      );
      this.loading = false;
    } else {
      let form = this.productForm.controls;
      let product = {
        nome: form.nome.value,
        marca: form.marca.value,
        preco: form.preco.value,
        codBarras: form.codBarras.value,
      };
      // console.log("Objeto enviado: ", product)
      this.produtoService.adicionarProduto(product).subscribe((res) => {
        if (res && res.status) {
          // console.log('Retorno da inserção: ', res);
          //Adicionar notificação melhor
          this.loading = false;
          // console.log("Parando de rodar!")
          this.notificationToastService.sucesso(
            new NotificationToastModel('Salvo com sucesso!')
          );
          this.router.navigateByUrl('products');
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
