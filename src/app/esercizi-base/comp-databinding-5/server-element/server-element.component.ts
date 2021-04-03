import { AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss']
})
export class ServerElementComponent implements OnInit, AfterViewInit, AfterContentInit {

  @Input('srvElement') element: {name: string, type: string, content: string};

  @ContentChild('contentChildRef', {static: true}) contentChildRef: ElementRef<HTMLParagraphElement>;

  constructor() { }

  ngOnInit() {
    console.log('on init');
    console.log(this.contentChildRef); // con  {static: true} riesco a trovarlo anche qui
  }

  ngAfterContentInit() {
    console.log('after content init');
    console.log(this.contentChildRef.nativeElement.textContent);
  }

  ngAfterViewInit() {
    console.log('after view init');
    console.log(this.contentChildRef);
  }


}
