import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FornecedorService } from '../fornecedor.service';

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

  constructor(private fornecedorService : FornecedorService, private fb : FormBuilder) {
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
    this.fornecedorService.buscarFornecedores().subscribe(res => {
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
