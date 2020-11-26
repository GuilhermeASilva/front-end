import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-atualiza-usuario',
  templateUrl: './atualiza-usuario.component.html',
  styleUrls: ['./atualiza-usuario.component.less'],
})
export class AtualizaUsuarioComponent implements OnInit {
  message = 'Atualização de Usuário';
  userId: number;
  user;
  userForm: FormGroup;
  loading = false;
  modalUpdate = false;
  modalDelete = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private usuarioService: UsuarioService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      nomeUsuario: ['', [Validators.required]],
      tipoUsuario: ['', [Validators.required]],
      email: ['', [Validators.required]],
      // senhaAntiga: ['', [Validators.required]],
      senhaNova: ['', [Validators.required]],
      // confirmarSenha: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.userId = parseInt(this.activatedRoute.snapshot.paramMap.get('id')); // Get ID value from route

    if (this.userId !== 0) {
      // se houver ID ele carrega
      this.loading = true;
      this.loadUser(this.userId); // Exibe dados no front
    }
  }

  loadUser(id: number) {
    this.usuarioService.buscarUsuarioPorId(id).subscribe((res) => {
      this.user = res.data;
      this.preencheForm();
    });
  }

  preencheForm() {
    this.userForm.patchValue(this.user);
    this.loading = false;
  }

  atualizarUsuario(modalUpdate?) {
    if (!modalUpdate) this.exibeModalUpdate(!modalUpdate);
    else {
      let form = this.userForm.controls;
      let user = {
        nomeUsuario: form.nomeUsuario.value,
        tipoUsuario: form.tipoUsuario.value,
        email: form.email.value,
        // senhaAntiga: form.senhaAntiga.value,
        senhaNova: form.senhaNova.value,
        // confirmarSenha: form.confirmarSenha.value,
      };
      // console.log("Objeto enviado: ", user)
      this.usuarioService
        .atualizarUsuario(this.userId, user)
        .subscribe((res) => {
          // console.log(res)
          if (res && res.status) {
            alert('Usuario alterado com sucesso!');
            this.router.navigateByUrl('users');
          }
        });
      this.exibeModalUpdate(modalUpdate);
    }
  }

  apagarUsuario(modalDelete?) {
    if (!modalDelete) this.exibeModalDelete(!modalDelete);
    else {
      this.usuarioService.apagarUsuario(this.userId).subscribe((res) => {
        if (
          res &&
          res.message &&
          res.message == 'Usuário deletado com sucesso'
        ) {
          alert('Usuário apagado com sucesso!');
          this.router.navigateByUrl('users');
          this.exibeModalDelete(modalDelete);
        }
      });
    }
  }

  exibeModalUpdate(fechar?) {
    if (fechar) this.modalUpdate = false;
    else this.modalUpdate = true;
  }

  exibeModalDelete(fechar?) {
    if (fechar) this.modalDelete = false;
    else this.modalDelete = true;
  }
}
