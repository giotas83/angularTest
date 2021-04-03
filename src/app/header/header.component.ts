import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    @Output() featureSelected: EventEmitter<FeatureSelected> = new EventEmitter();


    constructor() {

    }

    onSelect(feature: FeatureSelected) {
        this.featureSelected.emit(feature);
    }

}

type FeatureSelected = 'exercise' | 'recipe' | 'shopping-list';
