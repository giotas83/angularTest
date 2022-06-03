import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from "rxjs/operators";

interface AuthResponse {
    token: string;
}

@Injectable({providedIn: 'root'})
export class AuthService {
    constructor(private http: HttpClient) {

    }

    // registrazione fake, ritorna un token
    // è un url fake, che non permette le chiamate post, appena ritorna un errore faccio la chiamata get allo stesso url
    signup(email: string, password: string): Observable<AuthResponse> {
        return this.http.post<AuthResponse>('assets/auth-signup.json', {email: email, password: password} )
            .pipe(
                catchError( err => this.http.get<AuthResponse>('assets/auth-signup.json'))
            )
    }
}