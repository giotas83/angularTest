import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from "rxjs/operators";

export interface AuthResponse {
    token: string;
}

@Injectable({providedIn: 'root'})
export class AuthService {

    private readonly fakeUrl: string= 'assets/auth-signup.json';

    constructor(private http: HttpClient) {

    }

    // registrazione fake, ritorna un token
    // è un url fake, che non permette le chiamate post, appena ritorna un errore faccio la chiamata get allo stesso url
    signup(email: string, password: string): Observable<AuthResponse> {
        return this.http.post<AuthResponse>(this.fakeUrl, {email: email, password: password} )
            .pipe(
                catchError( err => this.http.get<AuthResponse>(this.fakeUrl))
            )
    }

    // login
    // è un url fake, che non permette le chiamate post, appena ritorna un errore faccio la chiamata get allo stesso url
    login(email: string, password: string): Observable<AuthResponse> {
        return this.http.post<AuthResponse>(this.fakeUrl, {email: email, password: password})
            .pipe(
                catchError( err => this.http.get<AuthResponse>(this.fakeUrl))
            )
    }
}