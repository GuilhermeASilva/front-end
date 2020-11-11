import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  ActivatedRoute
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router : Router,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const nextUrl = state.url !== '/' ? `/${btoa(state.url)}` : '';
    const token = this.authService.getToken();
    const loggedIn = token?true:false
    // console.log("Ativa: ", this.router.url)
    if (!loggedIn && this.router.url != "/login") {
      alert("Favor realizar login.")
      this.router.navigate(['login'])
    }
    return loggedIn;
  }
}
