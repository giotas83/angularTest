import { EventEmitter, Injectable } from '@angular/core'
import { from, Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';

@Injectable({
    providedIn: 'root'
})
export class AccountService {

    private accounts = [
        {name: 'Master Account', status: 'active'},
        {name: 'Test Account', status: 'inactive'},
        {name: 'Hidden Account', status: 'unknown'}
    ];

    constructor(private loggingService: LoggingService) {

    }

    // evento per comuncazione tra componenti
    // al posto del databinding, input e Output
    // innescaato in un componente e ascoltato in un altro
    public evtStatusUpdated: EventEmitter<string> = new EventEmitter();

    /**
     * recupera la lista di accounts
     * @returns Observable con la lista di account
     */
    getAccounts(): Observable<{name: string, status: string}[]> {
        return of(this.accounts); // con from() emeteva ogni elemento dell array e non l array intero
    }

    /**
     * aggiunge un nuovo account alla lista di accounts
     * @param name stringa
     * @param status stringa
     */
    addAccount(name: string, status: string): void {
        this.accounts.push({name: name, status: status});
        this.loggingService.logStatusChange(status);
    }

    /**
     * aggiorna lo status di un account nella lista
     * @param id number per individuare l'account da modificare nella lista
     * @param newStatus nuovo status dell'account
     */
    updateStatus(id: number, newStatus: string): void {
        this.accounts[id].status = newStatus;
        this.loggingService.logStatusChange(status);
    }


}