import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExerciseAuthService } from '../exercise-auth.service';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.scss']
})
export class RoutingComponent implements OnInit {

  isLogged: boolean;

  constructor(private router: Router, private exerciseAuthService: ExerciseAuthService) { }

  ngOnInit() {
    this.isLogged = this.exerciseAuthService.isLogged;
  }

  login() {
    this.exerciseAuthService.login();
    this.isLogged = this.exerciseAuthService.isLogged;
  }

  logOut() {
    this.exerciseAuthService.logOut();
    this.isLogged = this.exerciseAuthService.isLogged;
  }

  goToTestRoute() {
    console.log('click go test route, attendere auth guard');
    this.router.navigate(['/exercise-base/routingAccess']);
  }

}
