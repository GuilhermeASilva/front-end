import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../interceptors/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup

  constructor(private fb : FormBuilder, private authService : AuthService, private router: Router){
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  onSubmit() {
    let form = this.loginForm.controls
    let login = {
      email: form.email.value,
      senha: form.senha.value
    }
    let retorno = this.authService.validaLogin(login).subscribe((res: any) => {
      console.log(res)
      if(res && res.token!= undefined) {
        this.authService.login(res.token)
        this.router.navigateByUrl('home')
        alert('Bem vinde!')
      } else {
      alert("Erro ao tentar realizar login!")
    }
})
    }
}
