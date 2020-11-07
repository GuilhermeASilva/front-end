import {
	Component,
	OnInit
} from '@angular/core';
import {
	Router
} from '@angular/router';
import {
	FornecedorService
} from '../fornecedor.service';

@Component({
	selector: 'app-lista-fornecedor',
	templateUrl: './lista-fornecedor.component.html',
	styleUrls: ['./lista-fornecedor.component.less']
})

export class ListaFornecedorComponent implements OnInit {

	suppliers = []
	suppliersAux = []
	supplier
	loading = false

	constructor(private fornecedorService: FornecedorService, private router: Router) {}

	ngOnInit(): void {
		this.loading = true
		this.listarFornecedores()
	}

	listarFornecedores() {
		this.fornecedorService.listarFornecedores().subscribe(res => {
			this.suppliers = res.data
			this.suppliersAux = this.suppliers
			this.loading = false
		})
	}

	alterarFornecedor(id: number) {
		this.router.navigateByUrl(`supplier/${id}`)
	}

	atualizarLista(lista) {
		this.suppliersAux = lista
	}
}
