import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isLoginMode = true;
  isLoading = false;
  error: string = null;

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

    if(this.isLoginMode) {

    } else {
      this.signup(em, pass);
    }
   
    form.reset();
  }

  signup(email: string, pass: string) {
    this.isLoading = true;
    this.authService.signup(email, pass).subscribe( res => {
      console.log(res);
      this.isLoading = false;
    },
    err => {
      console.log(err);
      this.error = 'An error occurred!'
      this.isLoading = false;
    })
  }

}
