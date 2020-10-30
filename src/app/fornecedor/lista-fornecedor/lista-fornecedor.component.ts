import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ListaFornecedorService } from './lista-fornecedor.service';

@Component({
  selector: 'app-lista-fornecedor',
  templateUrl: './lista-fornecedor.component.html',
  styleUrls: ['./lista-fornecedor.component.less']
})

export class ListaFornecedorComponent implements OnInit {

  suppliers = []
  selected = "selected"
  supplier
  supplierForm : FormGroup

  constructor(private listaFornecedorService : ListaFornecedorService, private fb : FormBuilder) {
    this.supplierForm = this.fb.group({
      razaoSocial : [''],
      nomeFantasia : [''],
      endereco : [''],
      cidade : [''],
      uf : [''],
      telefone : [''],
      email : [''],
      site : ['']
    })
   }

  ngOnInit(): void {
    this.buscarFornecedores()
  }

  buscarFornecedores() {
    this.listaFornecedorService.buscarFornecedores().subscribe(res => {
      this.suppliers = res.data
      // console.log(this.suppliers)
    })
  }

  temFornecedorSelecionado = function(suppliers) {
    return suppliers.some(function (supplier){
        return supplier.selected;
    })
  }
}
