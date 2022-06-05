import { BehaviorSubject, Subject } from 'rxjs';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from "rxjs/operators";
import { User } from './user.model';
import { Router } from '@angular/router';

export interface AuthResponse {
    token: string;
    email: string,
    localId: string,
    expiresIn: string // scandenza token, secondi
}

@Injectable({providedIn: 'root'})
export class AuthService {

    private readonly fakeUrl: string= 'assets/auth-signup.json';

    public userSubj: BehaviorSubject<User> = new BehaviorSubject<User>(null);

    constructor(private http: HttpClient, private router: Router) {

    }

    // registrazione fake, ritorna un token
    // è un url fake, che non permette le chiamate post, appena ritorna un errore faccio la chiamata get allo stesso url
    signup(email: string, password: string): Observable<AuthResponse> {
        return this.http.post<AuthResponse>(this.fakeUrl, {email: email, password: password} )
            .pipe(
                catchError( err => this.http.get<AuthResponse>(this.fakeUrl)),
                tap( res => {
                   this.handleAuthentication(res.email, res.localId, res.token, +res.expiresIn);
                })
            )
    }

    // login
    // è un url fake, che non permette le chiamate post, appena ritorna un errore faccio la chiamata get allo stesso url
    login(email: string, password: string): Observable<AuthResponse> {
        return this.http.post<AuthResponse>(this.fakeUrl, {email: email, password: password})
            .pipe(
                catchError( err => this.http.get<AuthResponse>(this.fakeUrl)),
                tap( res => {
                    this.handleAuthentication(res.email, res.localId, res.token, +res.expiresIn);
                })
            )
    }

    /**
     * creazione user con la response del login, viene emesso un BehaviourSubject per tutti gli ascoltatori
     * e viene salvato nel localstorage
     */
    handleAuthentication(email: string, id: string, token: string, expirationSecond: number) {
        const expirationDate = new Date(new Date().getTime() + expirationSecond*1000); // aggiungo alla data di oggi i millisecondi di scadenza, data+scadenza
        const user = new User(email, id, token, expirationDate);
        this.userSubj.next(user);
        localStorage.setItem('userData', JSON.stringify(user));
    }

    logout() {
        this.userSubj.next(null);
        this.router.navigate(['/auth']);
        localStorage.removeItem('userData');
    }

    /**
     * se in atterraggio trovo l'user nel localstorage, effettuo il login in automatico
     * viene lanciato in atterraggio nell app, quindi in app.component
     * esempio di salvataggio:
     * {"email":"test@test.com","id":"10","_token":"suurongjcnduelci5m774ncn7948nvut794nv7445mjnkh","_tokenExpirationDate":"2022-06-05T08:46:41.081Z"}
     */
    autologin() {
        const userData: {email: string, id: string, _token: string, _tokenExpirationDate: string} = JSON.parse(localStorage.getItem('userData'));

        if(!userData) { return; }

        const loadedUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));

        // controllo se token non è scaduto, la classe ha un get, posso vedere li funzionamento, se è scaduto restituisce null
        if(loadedUser.token) {
            this.userSubj.next(loadedUser);
        }
    }


}