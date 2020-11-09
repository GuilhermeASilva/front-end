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
	FormatDate
} from 'src/app/utilities/format-date';
import {
	FornecedorService
} from '../fornecedor.service';

@Component({
	selector: 'app-atualiza-fornecedor',
	templateUrl: './atualiza-fornecedor.component.html',
	styleUrls: ['./atualiza-fornecedor.component.less']
})
export class AtualizaFornecedorComponent implements OnInit {

	supplierId: number
	supplier
	supplierForm: FormGroup
  loading = false
  modalUpdate = false
  modalDelete = false

	constructor(private activatedRoute: ActivatedRoute, private fornecedorService: FornecedorService, private fb: FormBuilder, private router: Router) {
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

	ngOnInit(): void {
		this.supplierId = parseInt(this.activatedRoute.snapshot.paramMap.get('id')) // Get ID value from route

		if (this.supplierId !== 0) { // se houver ID ele carrega
			this.loading = true
			this.loadSupplier(this.supplierId) // Exibe dados no front
		}
	}

	loadSupplier(id: number) {
		this.fornecedorService.buscarFornecedorPorId(id).subscribe(res => {
			this.supplier = res.data
			this.preencheForm()
		})
	}

	preencheForm() {
		this.supplierForm.patchValue(this.supplier)
		this.loading = false
	}

	atualizarFornecedor(modalUpdate?) {
    if(!modalUpdate) this.exibeModalUpdate(!modalUpdate)
    else {
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
		// console.log("Objeto enviado: ", this.supplierId, supplier);
		this.fornecedorService.atualizarFornecedor(this.supplierId, supplier).subscribe(res => {
			if (res && res.status) {
				// console.log("Retorno da deleção: ", res)
				//Adicionar notificação melhor
				alert("Fornecedor alterado com sucesso!")
        this.router.navigateByUrl('suppliers')

			}
    });
      this.exibeModalUpdate(modalUpdate)
    }
  }

	apagarFornecedor(modalDelete?) {
    if(!modalDelete) this.exibeModalDelete(!modalDelete)
    else {
      // console.log(this.supplierId)
		this.fornecedorService.apagarFornecedor(this.supplierId).subscribe(res => {
			if (res && res.message && res.message == "Fornecedor deletado") {
          // console.log("Retorno da deleção: ", res)
				//Adicionar notificação melhor
				alert("Fornecedor apagado com sucesso!")
        this.router.navigateByUrl('suppliers')
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
