import {
	Component,
	OnInit
} from '@angular/core';
import {
	Router
} from '@angular/router';
import {
	ServicoService
} from '../servico.service';

@Component({
	selector: 'app-lista-servico',
	templateUrl: './lista-servico.component.html',
	styleUrls: ['./lista-servico.component.less']
})

export class ListaServicoComponent implements OnInit {

	services = []
	servicesAux = []
	service
	loading = false

	constructor(private servicoService: ServicoService, private router: Router) {}

	ngOnInit(): void {
		this.loading = true
		this.listarServicos()
	}

	listarServicos() {
		this.servicoService.listarServicos().subscribe(res => {
			this.services = res.data
			this.servicesAux = this.services
			this.loading = false
		})
	}

	alterarServico(id: number) {
		this.router.navigateByUrl(`service/${id}`)
	}

	atualizarLista(lista) {
		this.servicesAux = lista
	}
}
