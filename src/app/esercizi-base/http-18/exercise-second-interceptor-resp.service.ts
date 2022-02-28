import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

export class ExerciseSecondInterceptorRespService implements HttpInterceptor{
    constructor() {

    }

    // esempio di come intercettare una response
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        console.log('exercise secondo interceptor -> resp');

        return next.handle(req).pipe( // non intercetto la req ma la response
            tap( resp => {
                console.log('exercise resp intercettata: ', resp);
            })
        )
    }

}

/*
body: Array(100) [ {…}, {…}, {…}, … ]
headers: Object { normalizedNames: Map(0), lazyUpdate: null, lazyInit: lazyInit()
 }
ok: true
status: 200
statusText: "OK"
type: 4
url: "https://jsonplaceholder.typicode.com/posts?queryUno=v
*/