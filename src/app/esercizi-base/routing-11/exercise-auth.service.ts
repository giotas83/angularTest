import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ExerciseAuthService {

    public isLogged = false;

    constructor() {

    }

    isAutenticated(): Observable<boolean> {
        console.log('init isAutenticated service');
        const observ: Observable<boolean> = of(this.isLogged)
            .pipe(
                delay(3000),
                tap(x => {
                    console.log('ritorno observable', x);
                    return x;
                }
            )
        );
        console.log('return isAutenticated service');
        return observ;
    }

    login(): void {
        this.isLogged = true;
    }

    logOut(): void {
        this.isLogged = false;
    }

}
