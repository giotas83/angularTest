import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthResponse, AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isLoginMode = true;
  isLoading = false;
  errorMessage: string = null;

  authObservable: Observable<AuthResponse>;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSwitchMode(): void {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    console.log(form);
    if(!form.valid) {
      return;
    }
    const em = form.value.email;
    const pass = form.value.password;

    this.errorMessage = null;
    if(this.isLoginMode) {
      this.authObservable = this.authService.login(em, pass);
    } else {
      this.authObservable =  this.authService.signup(em, pass);
    }
    form.reset();

    this.authObservable.subscribe( resp => {
      console.log(resp);
      this.isLoading = false;
    },
    err => {
      this.errorHandler(err);
    });
  }

  errorHandler(error: HttpErrorResponse) {
    console.log(error);
    if(error && error.message) {
      this.errorMessage = error.message
    } else {
      this.errorMessage = 'An error occurred!'
    }
    this.isLoading = false;
  }

}
