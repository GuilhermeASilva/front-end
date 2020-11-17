import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-altera-senha-usuario',
  templateUrl: './altera-senha-usuario.component.html',
  styleUrls: ['./altera-senha-usuario.component.less']
})
export class AlteraSenhaUsuarioComponent implements OnInit {

  message = "Alteração de Senha";
	userId: number
	user
	userForm: FormGroup
  loading = false
  modalUpdate = false

	constructor(private activatedRoute: ActivatedRoute, private usuarioService: UsuarioService, private fb: FormBuilder, private router: Router) {
		this.userForm = this.fb.group({
			senhaAntiga: ['', [Validators.required]],
			senha: ['', [Validators.required]],
			confirmarSenha: ['', [Validators.required]]
    })
	}

	ngOnInit(): void {
		this.userId = parseInt(this.activatedRoute.snapshot.paramMap.get('id')) // Get ID value from route

		if (this.userId !== 0) { // se houver ID ele carrega
			this.loading = true
			this.loadUser(this.userId) // Exibe dados no front
		}
	}

	loadUser(id: number) {
		this.usuarioService.buscarUsuarioPorId(id).subscribe(res => {
			this.user = res.data
			this.preencheForm()
		})
	}

	preencheForm() {
		this.userForm.patchValue(this.user)
		this.loading = false
	}

	alterarSenha(modalUpdate?) {
    if(!modalUpdate) this.exibeModalUpdate(!modalUpdate)
    else {
		let form = this.userForm.controls
		let user = {
      senhaAntiga: form.senhaAntiga.value,
      senha: form.senha.value,
      confirmarSenha: form.confirmarSenha.value,
    }
    console.log("Objeto enviado: ", user)
		// this.usuarioService.atualizarUsuario(this.userId, user).subscribe(res => {
      this.usuarioService.atualizarUsuario(this.userId, user).subscribe(res => {
        console.log(res)
			if (res && res.status) {
				alert("Usuario alterado com sucesso!")
        this.router.navigateByUrl('users')
			}
    });
      this.exibeModalUpdate(modalUpdate)
    }
  }

  exibeModalUpdate(fechar?){
    if(fechar) this.modalUpdate = false
    else this.modalUpdate = true
  }
}
