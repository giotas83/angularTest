import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { ExerciseAuthService } from './exercise-auth.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class ExerciseAuthGuardService implements CanActivate {

    constructor(private exerciseAuthService: ExerciseAuthService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        // questo crea errore nel ritorno di canActivate, per ovviare non devo ritornare un subscription, quindi non devo fare un subscribe
        // anche se inserisco i return all interno non funziona
        // uso gli operatori per non fare un subscribe
       /*  this.exerciseAuthService.isAutenticated()
            .subscribe( (data: boolean) => {
                if (data) {
                    return data; // ritorna true e va alla rotta
                } else {
                    this.router.navigate(['exercise-base']);
                    return false;
                }
            }, (error) => {
                return false;
            }); */

        return this.exerciseAuthService.isAutenticated().pipe(
            map( data => data),
            catchError( _ => {
                this.router.navigate(['exercise-base']);
                return of(false);
            })
        );
    }
}
