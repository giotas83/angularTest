import { AccountService } from './../account.service';
import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
})
export class NewAccountComponent implements OnInit {

  public updatedStatus: boolean;

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    // ricevo evento mandato da account.component attraverso il servizio
    // appare un avviso per 4 secondi ad ogni aggiornamento dello status
    this.accountService.evtStatusUpdated.subscribe( status => {
      this.updatedStatus = true;
      setTimeout( ()=> this.updatedStatus = false , 4000);
    });
  }

  onCreateAccount(name: string, status: string) {
    this.accountService.addAccount(name, status);
  }

}
