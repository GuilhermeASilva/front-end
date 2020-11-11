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
    if (this.supplierForm.invalid) alert("Erro, favor verificar os dados enviados!")
		this.loading = true

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
		this.fornecedorService.adicionarFornecedor(supplier).subscribe(res => {
			if (res && res.status) {
				this.loading = false
				alert("Fornecedor cadastrado com sucesso!")
				this.router.navigateByUrl('suppliers')
			}
		});
    this.loading = false
  }
}
