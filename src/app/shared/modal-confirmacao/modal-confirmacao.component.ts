import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-confirmacao',
  templateUrl: './modal-confirmacao.component.html',
  styleUrls: ['./modal-confirmacao.component.less'],
})
export class ModalConfirmacaoComponent implements OnInit {
  @Input() title;
  @Output() confirmar = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
    // console.log("Iniciando componente de modal!")
    document.getElementById('botaoStart').click();
  }
}
