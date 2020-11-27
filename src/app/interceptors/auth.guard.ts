import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  ActivatedRoute,
} from '@angular/router';
import { Observable } from 'rxjs';
import { NotificationToastModel } from '../shared/notification-toast/notification-toast.model';
import { NotificationToastService } from '../shared/notification-toast/notification-toast.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private notificationToastService: NotificationToastService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const nextUrl = state.url !== '/' ? `/${btoa(state.url)}` : '';
    const token = this.authService.getToken();
    const loggedIn = token ? true : false;
    if (!loggedIn && this.router.url != '/login') {
      this.notificationToastService.atencao(
        new NotificationToastModel('Favor realizar login.')
      );
      this.router.navigate(['login']);
    }
    return loggedIn;
  }
}
