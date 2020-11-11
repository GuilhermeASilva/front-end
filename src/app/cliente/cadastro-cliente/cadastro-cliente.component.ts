import {
	Component,
	OnInit
} from '@angular/core';
import {
	FormBuilder,
	FormGroup,
  Validators
} from '@angular/forms';
import {
	Router
} from '@angular/router';
import { CorrigeData } from 'src/app/utilities/corrige-data';
import {
	ClienteService
} from '../cliente.service';

@Component({
	selector: 'app-cadastro-cliente',
	templateUrl: './cadastro-cliente.component.html',
	styleUrls: ['./cadastro-cliente.component.less']
})

export class CadastroClienteComponent implements OnInit {

	message = "Cadastro de Clientes";
	customers = [];
	customer
	customerForm: FormGroup
	loading = false

	constructor(private clienteService: ClienteService, private fb: FormBuilder, private router: Router) {
		this.customerForm = this.fb.group({
			nome: ['', [Validators.required]],
			cpf: [''],
			dataNascimento: [''],
			endereco: [''],
			cidade: [''],
			uf: [''],
			telefone: [''],
			sexo: [''],
			email: ['']
		})
	}

	ngOnInit(): void {}

	adicionarCliente() {
    if (this.customerForm.invalid) alert("Erro, favor verificar os dados enviados!")
    this.loading = true

		let form = this.customerForm.controls
		let customer = {
			nome: form.nome.value,
			cpf: form.cpf.value,
			dataNascimento: CorrigeData.corrigeData(form.dataNascimento.value),
			endereco: form.endereco.value,
			cidade: form.cidade.value,
			uf: form.uf.value,
			telefone: form.telefone.value,
			email: form.email.value,
			sexo: form.sexo.value
    }
		this.clienteService.adicionarCliente(customer).subscribe(res => {
			if (res && res.status) {
				this.loading = false
				alert("Cliente cadastrado com sucesso!")
				this.router.navigateByUrl('customers')
			}
		});
    this.loading = false
  }
}
