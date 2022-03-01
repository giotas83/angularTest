import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appDropdownDirective]'
})
export class DropdownDirective {

    private isOpen = false;

    // @Input('appDropdownDirective') tempateDaColpire: ElementRef; // posso mandare in input il template da colpire se non è uguale dove uso questa direttiva

    @HostListener('click') toggle() {
        if (!this.isOpen) {
            const dropDownDivEl = this.elementRef.nativeElement.querySelector('.dropdown-menu');
            this.renderer.setStyle(dropDownDivEl, 'display', 'block');
        } else {
            const dropDownDivEl = this.elementRef.nativeElement.querySelector('.dropdown-menu');
            this.renderer.setStyle(dropDownDivEl, 'display', 'none');
        }
        this.isOpen = !this.isOpen;
    }

    constructor(private elementRef: ElementRef<HTMLElement>, private renderer: Renderer2) {

    }

}
