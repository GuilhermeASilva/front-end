import { Component, OnInit } from '@angular/core';
import { ClienteService } from './cliente-service.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.less']
})

export class CadastroClienteComponent implements OnInit {

  message = "Cadastro de Clientes";
  clients = [];
  class1 = "selected";
  return

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
  }

      temClienteSelecionado = function(clients) {
          return clients.some(function (client){
              return client.selected;
          })
      }

      // get
      // let data = response.data.data;
      // for (let resp in data){
      //     clients.push(data[resp]);
      // }

      adicionarCliente(cliente) {
        console.log("aqui");
        console.log(cliente)
        let cliente_teste = {
          nome: "ABC",
          cpf: "232323",
          dataNascimento: "2020-20-10",
          endereco: "abc",
          cidade: "abc",
          uf: "ab",
          telefone: "1111",
          email: "abc@123.com"
        }
        this.clienteService.adicionarCliente(cliente_teste).subscribe(res => console.log(res));
        // console.log(this.return);
      }

      buscarClientes() {
        console.log("aqui");
        this.clienteService.buscarClientes().subscribe(res => console.log(res));
      }


}
