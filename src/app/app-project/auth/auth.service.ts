import { Subject } from 'rxjs';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from "rxjs/operators";
import { User } from './user.model';

export interface AuthResponse {
    token: string;
    email: string,
    localId: string,
    expiresIn: string // scandenza token, secondi
}

@Injectable({providedIn: 'root'})
export class AuthService {

    private readonly fakeUrl: string= 'assets/auth-signup.json';

    public userSubj: Subject<User> = new Subject<User>();

    constructor(private http: HttpClient) {

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

    handleAuthentication(email: string, id: string, token: string, expirationSecond: number) {
        const expirationDate = new Date(new Date().getTime() + expirationSecond*1000); // aggiungo alla data di oggi i millisecondi di scadenza, data+scadenza
        const user = new User(email, id, token, expirationDate);
        this.userSubj.next(user);
    }
}