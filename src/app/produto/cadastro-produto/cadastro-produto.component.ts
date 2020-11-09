import {
	Component,
	OnInit
} from '@angular/core';
import {
	FormBuilder,
	FormGroup
} from '@angular/forms';
import {
	Router
} from '@angular/router';
import {
	ProdutoService
} from '../produto.service';

@Component({
	selector: 'app-cadastro-produto',
	templateUrl: './cadastro-produto.component.html',
	styleUrls: ['./cadastro-produto.component.less']
})

export class CadastroProdutoComponent implements OnInit {

	message = "Cadastro de Produtos";
	products = [];
	product
	productForm: FormGroup
	loading = false

	constructor(private produtoService: ProdutoService, private fb: FormBuilder, private router: Router) {
		this.productForm = this.fb.group({
			nome: [''],
			marca: [''],
			preco: [''],
			codBarras: ['']
		})
	}

	ngOnInit(): void {}

	adicionarProduto() {
		this.loading = true

		let form = this.productForm.controls
		let product = {
			nome: form.nome.value,
			marca: form.marca.value,
			preco: form.preco.value,
			codBarras: form.codBarras.value
		}
		// console.log("Objeto enviado: ", product)
		this.produtoService.adicionarProduto(product).subscribe(res => {
			if (res && res.status) {
				// console.log("Retorno da inserção: ", res)
				//Adicionar notificação melhor
				this.loading = false
				// console.log("Parando de rodar!")
				alert("Produto cadastrado com sucesso!")
				this.router.navigateByUrl('products')
			}
		});
  this.loading = false
  }
}
