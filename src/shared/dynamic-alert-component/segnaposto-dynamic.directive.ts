import { Directive, ViewContainerRef } from "@angular/core";

// utilizzare la direttiva nell html dove si vuol fare vedere il componente dinamico
// <ng-template segnapostoDynamicCmp><ng-template>
// poi nel ts
// @Viewchild(SegnapostoDynamicDirective) alertHost: SegnapostoDynamicDirective

@Directive({selector: '[segnapostoDynamicCmp]'})
export class SegnapostoDynamicDirective {

    constructor(public viewContainerRef: ViewContainerRef) { // riferimento al contenitore vista, puntatore del punto dove viene utilizzata la direttiva

    }
}