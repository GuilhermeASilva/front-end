import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  ActivatedRoute,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class PermissionGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const nextUrl = state.url !== '/' ? `/${btoa(state.url)}` : '';
    const ehAdmin = this.authService.getAdmin();
    if (!ehAdmin && this.router.url != '/login') {
      this.router.navigate(['/']);
    }
    return ehAdmin;
  }
}
