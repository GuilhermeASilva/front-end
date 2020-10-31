import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.less']
})
export class ListaUsuarioComponent implements OnInit {
  users = []
  selected = "selected"
  user
  userForm : FormGroup

  constructor(private usuarioService : UsuarioService, private fb : FormBuilder) {
    this.userForm = this.fb.group({
      nomeUsuario : [''],
      tipoUsuario : [''],
      email : ['']
    })
   }

  ngOnInit(): void {
    this.buscarUsuarios()
  }

  buscarUsuarios() {
    this.usuarioService.buscarUsuarios().subscribe(res => {
      this.users = res.data
      // console.log(this.users)
    })
  }

  temUsuarioSelecionado = function(users) {
    return users.some(function (user){
        return user.selected;
    })
  }
}
