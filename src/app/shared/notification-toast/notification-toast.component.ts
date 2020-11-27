import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { TipoToast } from 'src/app/utilities/enums/tipo-toast.enum';
declare var $: any;

@Component({
  selector: 'app-notification-toast',
  templateUrl: './notification-toast.component.html',
  styleUrls: ['./notification-toast.component.less'],
})
export class NotificationToastComponent implements OnChanges {
  @Input() exibir: boolean;
  @Input() delay?: number = 3000;
  @Input() tipo: number;
  @Input() texto: string;
  @Output() finalizado = new EventEmitter<any>();
  ETipoEnum = TipoToast;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges(changes) {
    if (changes.exibir) {
      // console.log('NgOnChanges do Toast Notification');
      this.cdr.detectChanges();
      setTimeout(() => {
        // console.log('SettimeOut Notification');
        this.finalizado.emit();
      }, this.delay);
      // console.log('Delay: do Toast', this.delay);
      $('.toast').toast('show');
      // this.exibir = null;
    }
  }
}
