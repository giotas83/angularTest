import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccountService } from './account.service';

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.scss']
})
export class DependencyInjectionComponent implements OnInit, OnDestroy {

  public accounts: {name: string, status: string}[] = [];
  private accountSubscription: Subscription;

  constructor(public accountService: AccountService) { }

  ngOnInit() {
    this.accountSubscription = this.accountService.getAccounts().subscribe( (accounts) => {
      this.accounts = accounts;
    })
  }

  ngOnDestroy() {
    this.accountSubscription.unsubscribe();
  }


}
