import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ListaProdutoService } from './lista-produto.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.less']
})

export class ListaProdutoComponent implements OnInit {

  products = []
  selected = "selected"
  product
  productForm : FormGroup

  constructor(private listaProdutoService : ListaProdutoService, private fb : FormBuilder) {
    this.productForm = this.fb.group({
      nome : [''],
      marca : [''],
      preco : [''],
      codBarras : ['']
    })
   }

  ngOnInit(): void {
    this.buscarProdutos()
  }

  buscarProdutos() {
    this.listaProdutoService.buscarProdutos().subscribe(res => {
      this.products = res.data
      // console.log(this.products)
    })
  }

  temProdutoSelecionado = function(products) {
    return products.some(function (product){
        return product.selected;
    })
  }
}
