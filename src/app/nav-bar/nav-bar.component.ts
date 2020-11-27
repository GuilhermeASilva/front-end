import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../interceptors/auth.service';
import { NotificationToastModel } from '../shared/notification-toast/notification-toast.model';
import { NotificationToastService } from '../shared/notification-toast/notification-toast.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less'],
})
export class NavBarComponent implements OnInit {
  logado$;
  admin$;
  modal = false;
  ehAdmin: boolean = false;
  notificacao : NotificationToastModel
  closeNotificacao: boolean = false

  constructor(
    private authService: AuthService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private notificationToastService: NotificationToastService
  ) {}

  ngOnInit(): void {
    this.logado$ = this.authService.estaLogado();
    this.admin$ = this.authService.ehAdministrador();
    this.cdr.detectChanges();
    this.ehAdmin = this.authService.getAdmin();
    this.notificationToastService.monitoraNotificacao().subscribe(res => {
      // console.log(res)
      if (res != null) {
        this.closeNotificacao = true
        this.notificacao = res
      }
    })
    // console.log("É admin?", this.ehAdmin);
  }

  logout(modal?) {
    // console.log(modal)
    if (!modal) this.exibeModalLogout(!modal);
    else {
      this.authService.logout();
      this.cdr.detectChanges();
      this.router.navigateByUrl('login');
      this.exibeModalLogout(modal);
    }
  }

  exibeModalLogout(fechar?) {
    if (fechar) this.modal = false;
    else this.modal = true;
  }

  fecharNotificacao(){
    // console.log("Fechar notificacao!")
    this.closeNotificacao = false
  }
}
