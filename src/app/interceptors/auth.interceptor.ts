import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  redirTryes = 0;
  constructor(private authService: AuthService, private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // console.log("Interceptor")
    // console.log(this.authService.getToken())
    const handleRequest = request.clone({
      headers: request.headers.set(
        'Authorization',
        `Bearer ${this.authService.getToken()}`
      ),
    });

    return next.handle(handleRequest).pipe(
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            if (this.redirTryes < 3) {
              this.redirTryes += 1;
              alert('Credenciais inválidas.');
              // console.log(this.router.url);
              //Inserir lógica de redirecionamento quando não estiver logado!
              //Usar navigate.
              //new LogoutRequestAction({ next: `/${btoa(this.router.url)}` })
              // console.log('Sessão expirou!', err)
            }
          } else if (err.status === 409) {
            const message = err.error.find(
              (item) => item.property === 'concorrencia'
            ).message;
          } else if (err.error && err.error.length > 0 && err.status !== 500) {
            console.log("Erro 1 do intercept: ", err.error);
          } else {
            alert(
              'Desculpe, encontramos um problema ao tentar realizar essa operação, tente novamente!'
            );
            console.log("Erro 2 do intercept: ", err);
          }
          return throwError(err);
        }
      })
    );
  }
}
