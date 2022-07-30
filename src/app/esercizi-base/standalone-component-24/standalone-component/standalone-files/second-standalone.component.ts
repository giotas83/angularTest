import { Component, OnInit } from "@angular/core";


@Component({
    selector: 'second-standalone',
    standalone: true,
    template: `
        <div>Second standalone component</div>
    `,
    styles: [`
        div {
            background-color: red;
        }
    `]
})
export class SecondStandaloneComponent implements OnInit {

    constructor() {

    }

    ngOnInit(): void {
        
    }
}