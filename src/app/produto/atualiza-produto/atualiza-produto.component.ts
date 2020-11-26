import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-atualiza-produto',
  templateUrl: './atualiza-produto.component.html',
  styleUrls: ['./atualiza-produto.component.less'],
})
export class AtualizaProdutoComponent implements OnInit {
  message = 'Atualização de Produto';
  productId: number;
  product;
  productForm: FormGroup;
  loading = false;
  modalUpdate = false;
  modalDelete = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private produtoService: ProdutoService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      nome: ['', [Validators.required]],
      marca: ['', [Validators.required]],
      preco: ['', [Validators.required]],
      codBarras: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.productId = parseInt(this.activatedRoute.snapshot.paramMap.get('id')); // Get ID value from route

    if (this.productId !== 0) {
      // se houver ID ele carrega
      this.loading = true;
      this.loadProduct(this.productId); // Exibe dados no front
    }
  }

  loadProduct(id: number) {
    this.produtoService.buscarProdutoPorId(id).subscribe((res) => {
      this.product = res.data;
      this.preencheForm();
    });
  }

  preencheForm() {
    this.productForm.patchValue(this.product);
    this.loading = false;
  }

  atualizarProduto(modalUpdate?) {
    if (!modalUpdate) this.exibeModalUpdate(!modalUpdate);
    else {
      let form = this.productForm.controls;
      let product = {
        nome: form.nome.value,
        marca: form.marca.value,
        preco: form.preco.value,
        codBarras: form.codBarras.value,
      };
      this.produtoService
        .atualizarProduto(this.productId, product)
        .subscribe((res) => {
          if (res && res.status) {
            alert('Produto alterado com sucesso!');
            this.router.navigateByUrl('products');
          }
        });
      this.exibeModalUpdate(modalUpdate);
    }
  }

  apagarProduto(modalDelete?) {
    if (!modalDelete) this.exibeModalDelete(!modalDelete);
    else {
      this.produtoService.apagarProduto(this.productId).subscribe((res) => {
        if (res && res.message && res.message == 'Produto deletado') {
          alert('Produto apagado com sucesso!');
          this.router.navigateByUrl('products');
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
