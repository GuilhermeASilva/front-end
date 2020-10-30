import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ListaServicoService } from './lista-servico.service';

@Component({
  selector: 'app-lista-servico',
  templateUrl: './lista-servico.component.html',
  styleUrls: ['./lista-servico.component.less']
})

export class ListaServicoComponent implements OnInit {

  services = []
  selected = "selected"
  service
  serviceForm : FormGroup

  constructor(private listaServicoService : ListaServicoService, private fb : FormBuilder) {
    this.serviceForm = this.fb.group({
      nroServico : [''],
      nome : [''],
      descricao : [''],
      valor : [''],
      prazoDias : [''],
      tipo : ['']
    })
   }

  ngOnInit(): void {
    this.buscarServicos()
  }

  buscarServicos() {
    this.listaServicoService.buscarServicos().subscribe(res => {
      this.services = res.data
      // console.log(this.services)
    })
  }

  temServicoSelecionado = function(services) {
    return services.some(function (service){
        return service.selected;
    })
  }
}
