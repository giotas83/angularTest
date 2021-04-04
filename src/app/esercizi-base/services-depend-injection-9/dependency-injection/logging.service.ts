import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoggingService {

    constructor() {

    }

    public logStatusChange(message: string) {
        console.log('add new Status ' + message);
    }
}
