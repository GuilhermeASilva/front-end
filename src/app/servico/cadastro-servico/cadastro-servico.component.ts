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
	ServicoService
} from '../servico.service';

@Component({
	selector: 'app-cadastro-servico',
	templateUrl: './cadastro-servico.component.html',
	styleUrls: ['./cadastro-servico.component.less']
})

export class CadastroServicoComponent implements OnInit {

	message = "Cadastro de Serviço";
	services = [];
	service
	serviceForm: FormGroup
	loading = false

	constructor(private servicoService: ServicoService, private fb: FormBuilder, private router: Router) {
		this.serviceForm = this.fb.group({
			nroServico: ['', [Validators.required]],
			nome: ['', [Validators.required]],
			descricao: ['', [Validators.required]],
			valor: ['', [Validators.required]],
			prazoDias: ['', [Validators.required]],
			categoria: ['', [Validators.required]]
		})
	}

	ngOnInit(): void {}

	adicionarServico() {
		this.loading = true

		let form = this.serviceForm.controls
		let service = {
			nroServico: form.nroServico.value,
			nome: form.nome.value,
			descricao: form.descricao.value,
			valor: form.valor.value,
      prazoDias: form.prazoDias.value,
      categoria: form.categoria.value

		}
		this.servicoService.adicionarServico(service).subscribe(res => {
			if (res && res.status) {
				this.loading = false
				alert("Servico cadastrado com sucesso!")
				this.router.navigateByUrl('services')
			}
		});
  this.loading = false
  }
}
