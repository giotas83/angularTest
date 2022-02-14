import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-test-input-component',
    template: `
        <div>
        <h3>Test input component </h3>
        INput test<input type="text" [(ngModel)]="nome" (ngModelChange)="changetest($event)">
        </div>
    `,
})
export class TestInputComponent implements OnInit {

    @Input() nome: string;
    @Output() evt = new EventEmitter<string>()

    constructor() {

    }

    ngOnInit() {

    }

    changetest(nome) {
        console.log(nome)
        this.evt.emit(nome);
    }

}