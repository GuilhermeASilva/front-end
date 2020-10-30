import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router : Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const nextUrl = state.url !== '/' ? `/${btoa(state.url)}` : '';
    const token = this.authService.getToken();
    // console.log(token, "Token aqui no Auth")
    const loggedIn = token?true:false
    if (!loggedIn) {
      alert("Favor realizar login.")
      this.router.navigateByUrl('login')
    }

    return loggedIn;
  }
}
