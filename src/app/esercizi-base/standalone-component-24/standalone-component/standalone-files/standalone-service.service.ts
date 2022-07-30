import { Injectable } from "@angular/core";


@Injectable({providedIn: "root"})
export class StandaloneService {

    private name;

    constructor() {

    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name ? name.toUpperCase() : '';
    }
}