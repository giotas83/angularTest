import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

/*
PRIMO INTERCETTORE
in questo intercettore simulo l'aggiunta di headers in tutte le chiamate
per simulare l'aggiunta di headers di autenticazione
 */

export class ExerciseAuthInterceptorService implements HttpInterceptor {

    constructor() {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        console.log('Primo intercettore');
        
        // req è immutabile, non posso impostare un nuovo url con req.url = '...'
        // devo clonarlo prima
        //const reqClone = req.clone({url: 'ciao'})  // http://localhost:4200/ciao?queryUno=valore
        const reqClone = req.clone({
            headers: req.headers.append('testAuth', 'XXXX')
        }) 

        return next.handle(reqClone);
    }

} 