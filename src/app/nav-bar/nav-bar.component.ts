import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../interceptors/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less']
})
export class NavBarComponent implements OnInit {
  logado$

  constructor(private authService : AuthService, private cdr : ChangeDetectorRef, private router : Router) { }

  ngOnInit(): void {
    this.logado$ = this.authService.estaLogado()
    this.cdr.detectChanges()
  }

  logout() {
    this.authService.logout()
    this.cdr.detectChanges()
    this.router.navigateByUrl('login')
  }
}
