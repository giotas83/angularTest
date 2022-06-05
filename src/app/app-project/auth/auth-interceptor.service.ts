import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { exhaustMap, take, switchMap } from "rxjs/operators";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

    constructor(private authService: AuthService) {

    }

    // intercetto le request e aggiungo il tocken recuperato durante il login
    // prima recupero l'user dall authservice, viene creato al login, poi con exhaustMap, aspetto che
    // il primo subscribe vada a buon fine per eseguire il secondo mettendo il token nell header nelle chiamate,
    // next.handle restituisce un observable
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.authService.userSubj
            .pipe(
               take(1),
               exhaustMap( user => {
                    if(!user) {
                        return next.handle(req)
                    }
                    const modifiedReq = req.clone({
                        headers: new HttpHeaders().set('authToken', user && user.token)
                    })
                    return next.handle(modifiedReq)
                })
            )

    }
}