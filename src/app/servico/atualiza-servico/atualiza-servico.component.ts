import {
	Component,
	OnInit
} from '@angular/core';
import {
	FormBuilder,
	FormGroup
} from '@angular/forms';
import {
	ActivatedRoute,
	Router
} from '@angular/router';
import {
	ServicoService
} from '../servico.service';

@Component({
	selector: 'app-atualiza-servico',
	templateUrl: './atualiza-servico.component.html',
	styleUrls: ['./atualiza-servico.component.less']
})
export class AtualizaServicoComponent implements OnInit {

	serviceId: number
	service
	serviceForm: FormGroup
  loading = false
  modalUpdate = false
  modalDelete = false

	constructor(private activatedRoute: ActivatedRoute, private servicoService: ServicoService, private fb: FormBuilder, private router: Router) {
		this.serviceForm = this.fb.group({
			nroServico: [''],
			nome: [''],
			descricao: [''],
			valor: [''],
			prazoDias: [''],
			categoria: ['']
    })
	}

	ngOnInit(): void {
		this.serviceId = parseInt(this.activatedRoute.snapshot.paramMap.get('id')) // Get ID value from route

		if (this.serviceId !== 0) { // se houver ID ele carrega
			this.loading = true
			this.loadSupplier(this.serviceId) // Exibe dados no front
		}
	}

	loadSupplier(id: number) {
		this.servicoService.buscarServicoPorId(id).subscribe(res => {
			this.service = res.data
			this.preencheForm()
		})
	}

	preencheForm() {
		this.serviceForm.patchValue(this.service)
		this.loading = false
	}

	atualizarServico(modalUpdate?) {
    if(!modalUpdate) this.exibeModalUpdate(!modalUpdate)
    else {
		let form = this.serviceForm.controls
		let service = {
			nroServico: form.nroServico.value,
			nome: form.nome.value,
			valor: form.valor.value,
      prazoDias: form.prazoDias.value,
      categoria: form.categoria.value
		}
		this.servicoService.atualizarServico(this.serviceId, service).subscribe(res => {
			if (res && res.status) {
				alert("Servico alterado com sucesso!")
        this.router.navigateByUrl('services')
			}
    });
      this.exibeModalUpdate(modalUpdate)
    }
  }

	apagarServico(modalDelete?) {
    if(!modalDelete) this.exibeModalDelete(!modalDelete)
    else {
		this.servicoService.apagarServico(this.serviceId).subscribe(res => {
			if (res && res.message && res.message == "Servico deletado") {
				alert("Servico apagado com sucesso!")
        this.router.navigateByUrl('services')
        this.exibeModalDelete(modalDelete)
			}
		})
  }
}

  exibeModalUpdate(fechar?){
    if(fechar) this.modalUpdate = false
    else this.modalUpdate = true
  }

  exibeModalDelete(fechar?){
    if(fechar) this.modalDelete= false
    else this.modalDelete = true
  }
}
