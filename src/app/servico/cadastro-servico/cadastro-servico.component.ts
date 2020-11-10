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
	ServicoService
} from '../servico.service';

@Component({
	selector: 'app-cadastro-servico',
	templateUrl: './cadastro-servico.component.html',
	styleUrls: ['./cadastro-servico.component.less']
})

export class CadastroServicoComponent implements OnInit {

	message = "Cadastro de Serviços";
	services = [];
	service
	serviceForm: FormGroup
	loading = false

	constructor(private servicoService: ServicoService, private fb: FormBuilder, private router: Router) {
		this.serviceForm = this.fb.group({
			nroServico: [''],
			nome: [''],
			descricao: [''],
			valor: [''],
			prazoDias: [''],
			categoria: ['']
		})
	}

	ngOnInit(): void {}

	adicionarServico() {
		this.loading = true

		let form = this.serviceForm.controls
		let service = {
			nroServico: form.nroServico.value,
			nome: form.nome.value,
			valor: form.valor.value,
      prazoDias: form.prazoDias.value,
      categoria: form.categoria.value

		}
		// console.log("Objeto enviado: ", service)
		this.servicoService.adicionarServico(service).subscribe(res => {
			if (res && res.status) {
				// console.log("Retorno da inserção: ", res)
				//Adicionar notificação melhor
				this.loading = false
				// console.log("Parando de rodar!")
				alert("Servico cadastrado com sucesso!")
				this.router.navigateByUrl('services')
			}
		});
  this.loading = false
  }
}
