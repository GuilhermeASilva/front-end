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
	FornecedorService
} from '../fornecedor.service';

@Component({
	selector: 'app-cadastro-fornecedor',
	templateUrl: './cadastro-fornecedor.component.html',
	styleUrls: ['./cadastro-fornecedor.component.less']
})

export class CadastroFornecedorComponent implements OnInit {

	message = "Cadastro de Fornecedores";
	suppliers = [];
	supplier
	supplierForm: FormGroup
	loading = false

	constructor(private fornecedorService: FornecedorService, private fb: FormBuilder, private router: Router) {
		this.supplierForm = this.fb.group({
			razaoSocial: [''],
			cnpj: [''],
			nomeFantasia: [''],
			endereco: [''],
			cidade: [''],
			uf: [''],
			telefone: [''],
      email: [''],
      site: ['']
		})
	}

	ngOnInit(): void {}

	adicionarFornecedor() {
		this.loading = true
		// console.log("Rodando!")

		let form = this.supplierForm.controls
		let supplier = {
			razaoSocial: form.razaoSocial.value,
			cnpj: form.cnpj.value,
			nomeFantasia: form.nomeFantasia.value,
			endereco: form.endereco.value,
			cidade: form.cidade.value,
			uf: form.uf.value,
			telefone: form.telefone.value,
			email: form.email.value,
			site: form.site.value
		}
		// console.log("Objeto enviado: ", supplier)
		this.fornecedorService.adicionarFornecedor(supplier).subscribe(res => {
			if (res && res.status) {
				// console.log("Retorno da deleção: ", res)
				//Adicionar notificação melhor
				this.loading = false
				// console.log("Parando de rodar!")
				alert("Fornecedor criado com sucesso!")
				this.router.navigateByUrl('suppliers')
			}
		});
	}
}
