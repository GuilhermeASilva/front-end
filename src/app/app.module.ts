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

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    CadastroUsuarioComponent,
    CadastroClienteComponent,
    ListaClienteComponent,
    AtualizaClienteComponent,
    ListaProdutoComponent,
    ListaProdutoComponent,
    ListaUsuarioComponent,
    HomeComponent
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
