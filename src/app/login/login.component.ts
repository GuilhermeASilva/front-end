import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../interceptors/auth.service';

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
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.authService.estaLogadoBolean()) this.router.navigate(['/']);
  }

  onSubmit() {
    let form = this.loginForm.controls;
    let login = {
      email: form.email.value,
      senha: form.senha.value,
    };
    this.authService.validaLogin(login).subscribe((res: any) => {
      console.log('- Imit');
      if (res && res.token != undefined) {
        this.authService.login(res.token, res.user.tipoUsuario);
        this.router.navigate(['/']);
      } else {
        alert('Erro ao tentar realizar login!');
      }
    });
  }
}
