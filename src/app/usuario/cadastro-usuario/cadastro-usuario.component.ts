import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationToastModel } from 'src/app/shared/notification-toast/notification-toast.model';
import { NotificationToastService } from 'src/app/shared/notification-toast/notification-toast.service';
import { ETipoUsuarioEnum } from 'src/app/utilities/enums/tipo-usuario.enum';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.less'],
})
export class CadastroUsuarioComponent implements OnInit {
  message = 'Cadastro de Usuário';
  users = [];
  user;
  userForm: FormGroup;
  loading = false;
  ETipoUsuario = ETipoUsuarioEnum;

  constructor(
    private usuarioService: UsuarioService,
    private fb: FormBuilder,
    private router: Router,
    private notificationToastService: NotificationToastService
  ) {
    this.userForm = this.fb.group({
      nomeUsuario: ['', [Validators.required]],
      email: ['', [Validators.required]],
      senha: ['', [Validators.required]],
      tipoUsuario: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  adicionarUsuario() {
    this.loading = true;

    let form = this.userForm.controls;
    let user = {
      nomeUsuario: form.nomeUsuario.value,
      email: form.email.value,
      senha: form.senha.value,
      tipoUsuario: form.tipoUsuario.value,
    };
    this.usuarioService.adicionarUsuario(user).subscribe((res) => {
      if (res && res.status) {
        this.loading = false;
        this.notificationToastService.sucesso(
          new NotificationToastModel('Salvo com sucesso!')
        );
        this.router.navigateByUrl('users');
      }
    });
    this.loading = false;
  }
}
