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
    if (this.customerForm.invalid) {
      console.log("Invalido!")
    }
		this.loading = true
		// console.log("Rodando!")

		let form = this.customerForm.controls
		let customer = {
			nome: form.nome.value,
			cpf: form.cpf.value,
			dataNascimento: form.dataNascimento.value,
			endereco: form.endereco.value,
			cidade: form.cidade.value,
			uf: form.uf.value,
			telefone: form.telefone.value,
			email: form.email.value,
			sexo: form.sexo.value
		}
		// console.log("Objeto enviado: ", customer)
		this.clienteService.adicionarCliente(customer).subscribe(res => {
			if (res && res.status) {
        // console.log(res.status)
				// console.log("Retorno da inserção: ", res)
				//Adicionar notificação melhor
				this.loading = false
				// console.log("Parando de rodar!")
				alert("Cliente cadastrado com sucesso!")
				this.router.navigateByUrl('customers')
			}
		});
    this.loading = false
  }
}
