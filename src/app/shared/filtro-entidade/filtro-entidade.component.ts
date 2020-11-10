import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filtro-entidade',
  templateUrl: './filtro-entidade.component.html',
  styleUrls: ['./filtro-entidade.component.less']
})
export class FiltroEntidadeComponent {

  @Input() lista: any[]
  @Output() buscar = new EventEmitter<any>()
  filtroForm : FormGroup
  aux = []
  @Input() parametro: string

  constructor(private fb : FormBuilder) {
    this.filtroForm = this.fb.group({
      filtro: ['']
    })
   }

  filtrar(){
    var campoFiltro = this.filtroForm.controls.filtro.value

      if (campoFiltro.length > 0) { // Se houver texto
        this.aux = []

          this.lista.forEach(customer => {
              var expressao = new RegExp(campoFiltro, "i")

              if (expressao.test(customer[this.parametro])) { // Valida o nome com o regex
                  this.aux.push(customer)
              }
          })
          this.buscar.emit(this.aux)
      } else { // Input vazio
        this.aux = this.lista
        this.buscar.emit(this.lista)
      }
    }

}
