import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationToastModel } from 'src/app/shared/notification-toast/notification-toast.model';
import { NotificationToastService } from 'src/app/shared/notification-toast/notification-toast.service';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-atualiza-proprio-usuario',
  templateUrl: './atualiza-proprio-usuario.component.html',
  styleUrls: ['./atualiza-proprio-usuario.component.less'],
})
export class AtualizaProprioUsuarioComponent implements OnInit {
  message = 'Atualização de Cadastro';
  userId;
  user;
  userForm: FormGroup;
  loading = false;
  modalUpdate = false;
  modalDelete = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private usuarioService: UsuarioService,
    private fb: FormBuilder,
    private router: Router,
    private notificationToastService: NotificationToastService
  ) {
    this.userForm = this.fb.group({
      nomeUsuario: ['', [Validators.required]],
      email: ['', [Validators.required]],
      senhaAntiga: [''],
      senha: [''],
      confirmarSenha: [''],
    });
  }

  ngOnInit(): void {
    this.userId = localStorage.getItem('id');
    // console.log("userId no Init: ", this.userId)

    if (this.userId !== 0) {
      // se houver ID ele carrega
      // this.loading = true;
      this.loadUser(this.userId); // Exibe dados no front
      // console.log("Retorno do Init: ", this.userId)
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

  atualizarProprioUsuario(modalUpdate?) {
    if (!modalUpdate) this.exibeModalUpdate(!modalUpdate);
    else {
      let form = this.userForm.controls;
      let user = {
        nomeUsuario: form.nomeUsuario.value,
        email: form.email.value,
        senhaAntiga: form.senhaAntiga.value,
        senha: form.senha.value,
        confirmarSenha: form.confirmarSenha.value,
      };
      if (form.senhaAntiga.value == '') {
        delete user.senhaAntiga;
        delete user.senha;
        delete user.confirmarSenha;
      }
      // console.log("Objeto enviado: ", user)
      this.usuarioService.atualizarProprioUsuario(user).subscribe((res) => {
        // console.log("Resultado da Atualização do Próprio Usuário: ", res)
        if (res && res.status) {
          this.notificationToastService.sucesso(
            new NotificationToastModel('Salvo com sucesso!')
          );
          this.router.navigateByUrl('/');
        } else {
          this.notificationToastService.erro(
            new NotificationToastModel('Erro ao tentar salvar!')
          );
        }
      });
      this.exibeModalUpdate(modalUpdate);
    }
  }

  exibeModalUpdate(fechar?) {
    if (fechar) this.modalUpdate = false;
    else this.modalUpdate = true;
  }
}
