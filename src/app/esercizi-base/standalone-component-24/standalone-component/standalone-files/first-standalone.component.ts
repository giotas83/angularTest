import { StandaloneService } from './standalone-service.service';
import { SecondStandaloneComponent } from './second-standalone.component';
import { Component, OnInit } from "@angular/core";
import { FirstDirectiveDirective } from "./first-directive.directive";


@Component({
    standalone: true,
    template: `
        <div>Ciao sono un componente Standalone: {{name}}
            <p firstDirective>Qui utilizzo una direttiva standalone</p>
            <second-standalone></second-standalone>
        </div>
    `,
    styles: [`
        div {
            border: 2px solid white;
            padding: 10px;
        }
    `],
    selector: 'first-standalone',
    imports: [FirstDirectiveDirective, SecondStandaloneComponent]
})
export class FirstStandaloneComponent implements OnInit {

    public name: string;
    constructor(private stService: StandaloneService) {
    }

    ngOnInit(): void {
        this.stService.setName('First Standalone Component');
        this.name = this.stService.getName();
    }
}