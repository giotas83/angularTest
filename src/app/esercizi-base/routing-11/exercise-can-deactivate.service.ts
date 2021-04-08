import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

// interfaccia per simulare il componente, in questo modo si utilizza il metodo creato nel componente, se esiste
// in modo da poter eseguire dei controlli nel componente stesso che innescano il ritorno true/false del guard
 // se presente il metodo nel componente lo esegue, vuol dire che voglio implementare la logica per uscire dalla rotta,
 // altrimenti ritorna true e posso uscire
 // il componente è quello che usa il canDeactivate, quindi quello impostato nella rotta

@Injectable({
    providedIn: 'root'
})
export class ExerciseCanDeactivateService implements CanDeactivate<CanComponentDeactivate> {


    constructor() {

    }

    canDeactivate(component: CanComponentDeactivate,
                  currentRoute: ActivatedRouteSnapshot,
                  currentState: RouterStateSnapshot,
                  nextState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

            return component.canDeactivate ? component.canDeactivate() : true;

    }
}
