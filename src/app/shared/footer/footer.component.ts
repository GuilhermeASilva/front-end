import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/interceptors/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
  logado$;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.logado$ = this.authService.estaLogado();
  }
}
