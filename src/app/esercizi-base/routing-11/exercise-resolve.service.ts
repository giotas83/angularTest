import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ExerciseResolveService implements Resolve<string> {

    // qui posso iniettare un servizio che fa una chiamata al server
    // invece di passare questa stringa
    // posso usare la rotta se ad esempio la chiamata vuole qualche paramentro che mado nella rotta

    private messageDinamic = 'dati dinamici caricati con resolve prima di accedere alla rotta';

    constructor() {
    }

    resolve(): Observable<string> | Promise<string> | string {
        return of(this.messageDinamic);
    }
}
