import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private accountService: AccountService) { }

  ngOnInit() {
  }

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    // mando evento attraverso il servizio, ricevuto in new-account.component
    this.accountService.evtStatusUpdated.emit(status);
  }

}
