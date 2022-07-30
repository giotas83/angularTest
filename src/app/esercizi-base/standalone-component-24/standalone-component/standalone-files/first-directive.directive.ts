import { Directive, ElementRef, HostBinding, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[firstDirective]',
    standalone: true
})
export class FirstDirectiveDirective implements OnInit {

    @HostBinding('style.backgroundColor') coloreSfondo: string;

    constructor(private elRef: ElementRef, private renderer: Renderer2) {

    }

    ngOnInit(): void {
        this.coloreSfondo = 'blue';
       // this.renderer.setStyle(this.elRef, 'backgroundColor', 'blue');
    }


}