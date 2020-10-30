import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AtualizaClienteComponent } from './cliente/atualiza-cliente/atualiza-cliente.component';
import { CadastroClienteComponent } from './cliente/cadastro-cliente/cadastro-cliente.component';
import { ListaClienteComponent } from './cliente/lista-cliente/lista-cliente.component';
import { AtualizaFornecedorComponent } from './fornecedor/atualiza-fornecedor/atualiza-fornecedor.component';
import { CadastroFornecedorComponent } from './fornecedor/cadastro-fornecedor/cadastro-fornecedor.component';
import { ListaFornecedorComponent } from './fornecedor/lista-fornecedor/lista-fornecedor.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './interceptors/auth.guard';
import { LoginComponent } from './login/login.component';
import { AtualizaProdutoComponent } from './produto/atualiza-produto/atualiza-produto.component';
import { CadastroProdutoComponent } from './produto/cadastro-produto/cadastro-produto.component';
import { ListaProdutoComponent } from './produto/lista-produto/lista-produto.component';
import { AtualizaServicoComponent } from './servico/atualiza-servico/atualiza-servico.component';
import { CadastroServicoComponent } from './servico/cadastro-servico/cadastro-servico.component';
import { ListaServicoComponent } from './servico/lista-servico/lista-servico.component';
import { AtualizaUsuarioComponent } from './usuario/atualiza-usuario/atualiza-usuario.component';
import { CadastroUsuarioComponent } from './usuario/cadastro-usuario/cadastro-usuario.component';
import { ListaUsuarioComponent } from './usuario/lista-usuario/lista-usuario.component';

const routes: Routes = [
  //Padrão
  { path: '',
  pathMatch: 'full', // exatamente como está no path para não considerar nas outras rotas
  redirectTo: 'login',
},
  { path: 'login',
component: LoginComponent,
},
{ path: 'home',
canActivate: [AuthGuard],
component: HomeComponent,
},

// Cliente
{ path: 'customers',
canActivate: [AuthGuard],
component: ListaClienteComponent,
},
{ path: 'customer_registration',
canActivate: [AuthGuard],
component: CadastroClienteComponent,
},
{ path: 'customer_update',
canActivate: [AuthGuard],
component: AtualizaClienteComponent,
},

//Fornecedor
{ path: 'suppliers',
canActivate: [AuthGuard],
component: ListaFornecedorComponent,
},
{ path: 'supplier_registration',
canActivate: [AuthGuard],
component: CadastroFornecedorComponent,
},
{ path: 'supplier_update',
canActivate: [AuthGuard],
component: AtualizaFornecedorComponent,
},

//Produto
{ path: 'products',
canActivate: [AuthGuard],
component: ListaProdutoComponent,
},
{ path: 'product_registration',
canActivate: [AuthGuard],
component: CadastroProdutoComponent,
},
{ path: 'product_update',
canActivate: [AuthGuard],
component: AtualizaProdutoComponent,
},

//Serviço
{ path: 'orders',
canActivate: [AuthGuard],
component: ListaServicoComponent,
},
{ path: 'order_registration',
canActivate: [AuthGuard],
component: CadastroServicoComponent,
},
{ path: 'order_update',
canActivate: [AuthGuard],
component: AtualizaServicoComponent,
},

//Usuário
{ path: 'users',
canActivate: [AuthGuard],
component: ListaUsuarioComponent,
},
{ path: 'user_registration',
canActivate: [AuthGuard],
component: CadastroUsuarioComponent,
},
{ path: 'user_update',
canActivate: [AuthGuard],
component: AtualizaUsuarioComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
