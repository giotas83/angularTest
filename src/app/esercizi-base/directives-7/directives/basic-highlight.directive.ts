import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

// questa direttiva evidenzia l elemento dov' è utilizzata al passaggio del mouse
// primo utilizzo elementref ma posso farlo in modo migliore
// utilizzo renderer, serve per modificare/creare dom

@Directive({
    selector: '[appBasicHighligh]'
})
export class BasicHighlightDirective implements OnInit {

    // definisco parametri di input se voglio
    @Input('appBasicHighligh') highlightColor: string = 'green'; // metto un defaulte se non utilizzo l input
    @Input() defaultColor: string = 'white';

    // su quale proprietà dell'host vogliamo legare una variabile, per poi cambiarla
    // sono le stesse del nativeElment
    @HostBinding('style.backgroundColor') coloreSfondo: string;

    // ascolto eventi dell elemnto a cui è applicata la direttiva
    @HostListener('mouseenter') mouseEnter(event: Event) {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green'); // con renderer
        this.coloreSfondo = this.highlightColor; // con hostBinding
        this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
    }

    @HostListener('mouseleave') mouseLeave(event: Event) {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent'); // con renderer
        this.coloreSfondo = this.defaultColor;
    }

    constructor(private elementRef: ElementRef<HTMLElement>, private renderer: Renderer2) {

    }

    ngOnInit() {
        this.coloreSfondo = this.defaultColor;

        // SENZA EVENTI O HOST BINDING
        // this.elementRef.nativeElement.style.backgroundColor = 'green'; // meglio non cambiare direttamente l elemento
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green');
    }

}
