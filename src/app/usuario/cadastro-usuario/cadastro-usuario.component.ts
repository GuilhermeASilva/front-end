import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.less']
})
export class CadastroUsuarioComponent implements OnInit {

  users = []

  constructor() { }

  ngOnInit(): void {
  }

             message="Cadastro de Usuários";


             adicionarUsuario = function(user) {
                 this.users.push(user);
                 delete this.user;

             };

             apagarUsuario = function(users) {
                 users = users.filter(function(user) {
                     if (!user.selected) return user;

                 })
             };

             temUsuarioSelecionado = function(users) {
                 return users.some(function (user){
                     return user.selected;
                 })
             };

             class1 = "selected";
}
