import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CadastroClienteComponent } from './cliente/cadastro-cliente/cadastro-cliente.component';
import { ListaClienteComponent } from './cliente/lista-cliente/lista-cliente.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './interceptors/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '',
  pathMatch: 'full', // exatamente como está no path para não considerar nas outras rotas
  redirectTo: 'login',
},
  { path: 'login',
component: LoginComponent
},
{ path: 'home',
canActivate: [AuthGuard],
component: HomeComponent
},
{ path: 'customers',
canActivate: [AuthGuard],
component: ListaClienteComponent,
},
{ path: 'customer_registration',
canActivate: [AuthGuard],
component: CadastroClienteComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

