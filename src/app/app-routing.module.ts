import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
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
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

