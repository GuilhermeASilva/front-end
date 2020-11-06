import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './interceptors/auth.service';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './interceptors/auth.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { ListaProdutoComponent } from './produto/lista-produto/lista-produto.component';
import { ListaUsuarioComponent } from './usuario/lista-usuario/lista-usuario.component';
import { CadastroUsuarioComponent } from './usuario/cadastro-usuario/cadastro-usuario.component';
import { ListaClienteComponent } from './cliente/lista-cliente/lista-cliente.component';
import { CadastroClienteComponent } from './cliente/cadastro-cliente/cadastro-cliente.component';
import { AtualizaClienteComponent } from './cliente/atualiza-cliente/atualiza-cliente.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CadastroFornecedorComponent } from './fornecedor/cadastro-fornecedor/cadastro-fornecedor.component';
import { AtualizaFornecedorComponent } from './fornecedor/atualiza-fornecedor/atualiza-fornecedor.component';
import { AtualizaServicoComponent } from './servico/atualiza-servico/atualiza-servico.component';
import { AtualizaProdutoComponent } from './produto/atualiza-produto/atualiza-produto.component';
import { ListaFornecedorComponent } from './fornecedor/lista-fornecedor/lista-fornecedor.component';
import { AtualizaUsuarioComponent } from './usuario/atualiza-usuario/atualiza-usuario.component';
import { CadastroProdutoComponent } from './produto/cadastro-produto/cadastro-produto.component';
import { CadastroServicoComponent } from './servico/cadastro-servico/cadastro-servico.component';
import { ListaServicoComponent } from './servico/lista-servico/lista-servico.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
// import { FooterComponent2 } from './shared/footer2/footer2.component';
import { FiltroEntidadeComponent } from './shared/filtro-entidade/filtro-entidade.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { ModalConfirmacaoComponent } from './shared/modal-confirmacao/modal-confirmacao.component';
import { FooterComponent } from './shared/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AtualizaClienteComponent,
    AtualizaFornecedorComponent,
    AtualizaProdutoComponent,
    AtualizaServicoComponent,
    AtualizaUsuarioComponent,
    CadastroClienteComponent,
    CadastroFornecedorComponent,
    CadastroProdutoComponent,
    CadastroServicoComponent,
    CadastroUsuarioComponent,
    ListaClienteComponent,
    ListaFornecedorComponent,
    ListaProdutoComponent,
    ListaServicoComponent,
    ListaUsuarioComponent,
    NavBarComponent,
    FooterComponent,
    // FooterComponent2,
    FiltroEntidadeComponent,
    LoadingComponent,
    ModalConfirmacaoComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule, // Controlar formulário
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, // informa que será um interceptador
      useClass: AuthInterceptor, // Qual interceptador usar
      multi: true // Se houver mais algum interceptador usar também
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}

// declare module "@angular/core" {
//   interface ModuleWithProviders<T = any> {
//       ngModule: Type<T>;
//       providers?: Provider[];
//   }
// }
