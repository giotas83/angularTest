import { Directive, ElementRef, Input, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';

// DIRETTIVA STRUTTURALE CHE SI COMPORTA IN MODO OPPOSTO A DI NGIF
// la stella in *ngIf serve a creare un ng-temlate che avvolge tutto l'elemento dove utilizzo la direttiva, lo fa angular nelle direttive strutturali
// se invece utilizzo ngIf in un ng-template e non in un div non devo mettere la * ma utilizzo [ngIf] perchè non mi serve che angular crea un temlate 
// <div *ngIf=""> ... </div>
// <ng-template [ngIf]=""> ... </ng-template

@Directive({
    selector: '[appStructuralDirectiveOppostoNgIf]'
})
export class StructuralDirective {

    // utilizzo un setter, cosi viene eseguito ogni volta che la proprietà di input cambia
    @Input('appStructuralDirectiveOppostoNgIf') set nascondi(inputValue: boolean) {
        if (!inputValue) {
            this.mostraTemplate();
        } else {
            this.nascondiTemplate();
        }
    }

    // templateref rappresenta il COSA MOSTRO
    // viewContainerRef rappresenta il DOVE MOSTRO

    constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {

    }

    private mostraTemplate(): void {
        this.vcRef.createEmbeddedView(this.templateRef);
    }

    private nascondiTemplate(): void {
        this.vcRef.clear();
    }

}