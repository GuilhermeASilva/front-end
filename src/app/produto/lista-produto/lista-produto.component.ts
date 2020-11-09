import {
	Component,
	OnInit
} from '@angular/core';
import {
	Router
} from '@angular/router';
import {
	ProdutoService
} from '../produto.service';

@Component({
	selector: 'app-lista-produto',
	templateUrl: './lista-produto.component.html',
	styleUrls: ['./lista-produto.component.less']
})

export class ListaProdutoComponent implements OnInit {

	products = []
	productsAux = []
	product
	loading = false

	constructor(private produtoService: ProdutoService, private router: Router) {}

	ngOnInit(): void {
		this.loading = true
		this.listarProdutos()
	}

	listarProdutos() {
		this.produtoService.listarProdutos().subscribe(res => {
			this.products = res.data
			this.productsAux = this.products
			this.loading = false
		})
	}

	alterarProduto(id: number) {
		this.router.navigateByUrl(`product/${id}`)
	}

	atualizarLista(lista) {
		this.productsAux = lista
	}
}
