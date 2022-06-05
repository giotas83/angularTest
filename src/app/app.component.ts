import { Component, OnInit } from '@angular/core';
import { AuthService } from './app-project/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {
    // in atterraggio nell app, controllo se in precedenza ho salvato i dati dell'utente con il token nel localstorage e li recupero
      this.authService.autologin();
  }


}

