import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TipoToast } from 'src/app/utilities/enums/tipo-toast.enum';
import { NotificationToastModel } from './notification-toast.model';

@Injectable({
  providedIn: 'root',
})
export class NotificationToastService {
  private toastNotification = new BehaviorSubject<any>(null); //BehaviorSubject precisa de um valor inicial, nesse caso null

  constructor() {}

  monitoraNotificacao() {
    return this.toastNotification.asObservable();
    // observable para que quem chamar conseguir fazer o subscribe
  }

  sucesso(notificacao: NotificationToastModel) {
    notificacao.tipo = TipoToast.Sucesso;
    this.toastNotification.next(notificacao);
  }

  erro(notificacao: NotificationToastModel) {
    notificacao.tipo = TipoToast.Erro;
    this.toastNotification.next(notificacao);
  }

  atencao(notificacao: NotificationToastModel) {
    notificacao.tipo = TipoToast.Atencao;
    this.toastNotification.next(notificacao);
  }
}
