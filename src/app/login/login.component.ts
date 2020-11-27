import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../interceptors/auth.service';
import { NotificationToastModel } from '../shared/notification-toast/notification-toast.model';
import { NotificationToastService } from '../shared/notification-toast/notification-toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  message = 'Cicloview';
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private notificationToastService: NotificationToastService
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.authService.estaLogadoBolean()) this.router.navigate(['/']);
  }

  onSubmit(e?) {
    if ((e && e.key == 'Enter') || !e) {
      let form = this.loginForm.controls;
      let login = {
        email: form.email.value,
        senha: form.senha.value,
      };
      this.authService.validaLogin(login).subscribe((res: any) => {
        if (res && res.token != undefined) {
          this.authService.login(
            res.user.id,
            res.user.email,
            res.user.tipoUsuario,
            res.token
          );
          this.router.navigate(['/']);
          // console.log('Resultado do login: ', res);
          this.notificationToastService.sucesso(
            new NotificationToastModel('Bem vinde ao sistema!')
          );
        } else {
          this.notificationToastService.erro(
            new NotificationToastModel('Verifique as credenciais!')
          );
        }
      });
    }
  }
}
