import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/interceptors/auth.service';
import { FormatDate } from 'src/app/utilities/format-date';
import { OrdemDeServicoService } from '../ordem-de-servico.service';

@Component({
  selector: 'app-lista-ordem-de-servico',
  templateUrl: './lista-ordem-de-servico.component.html',
  styleUrls: ['./lista-ordem-de-servico.component.less'],
})
export class ListaOrdemDeServicoComponent implements OnInit {
  message = 'Ordens de Serviço';
  orders = [];
  ordersAux = [];
  order;
  loading = false;

  constructor(
    private ordemDeServicoService: OrdemDeServicoService,
    private router: Router,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.listarOrdensDeServico();
  }

  listarOrdensDeServico() {
    // let user = this.authService.getUserAtual()
    this.ordemDeServicoService.listarOrdensDeServico().subscribe((res) => {
      this.orders = res.orders;
      console.log("Ordens: ", res);
      this.orders.forEach((o, i) => {
        this.orders[i].dataEntrega = FormatDate.timestampToDate(
          this.orders[i].dataEntrega
        );
      });
      this.ordersAux = this.orders;
      this.loading = false;
    });
  }

  alterarOrdemDeServico(id: number) {
    this.router.navigateByUrl(`order/${id}`);
  }

  atualizarLista(lista) {
    this.ordersAux = lista;
  }
}
