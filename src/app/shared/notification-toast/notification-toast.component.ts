import { ChangeDetectorRef, Component, Input, OnChanges } from '@angular/core';
import { TipoToast } from 'src/app/utilities/enums/tipo-toast.enum';
declare var $:any;

@Component({
  selector: 'app-notification-toast',
  templateUrl: './notification-toast.component.html',
  styleUrls: ['./notification-toast.component.less']
})
export class NotificationToastComponent implements OnChanges {
@Input() exibir: boolean
@Input() delay?: number = 3000
@Input() tipo: number
@Input() texto: string
ETipoEnum = TipoToast

  constructor(private cdr : ChangeDetectorRef) { }

  ngOnChanges(changes) {
      if (changes.exibir) {
        this.cdr.detectChanges()
        $('.toast').toast('show');
    }
  }
}
