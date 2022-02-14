import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlContainer, NgForm, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-test-input-component',
    template: `
        <div>
        <h3>Test input component </h3>
        INput test<input name="inputTest" type="text" [(ngModel)]="nome" (ngModelChange)="changetest($event)">
        </div>
    `,
    viewProviders: [
        /* {
            provide: NG_VALUE_ACCESSOR,
            useExisting: TestInputComponent,
            multi: true
        } */
        {
            provide: ControlContainer,
            useExisting: NgForm
        }
    ]
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