import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated: EventEmitter<{serverName: string, serverContent: string}> = new EventEmitter();
  @Output() blueprintCreated: EventEmitter<{serverName: string, serverContent: string}> = new EventEmitter();

  // static: true lo vedo nell onInit, false dopo nell afterView..
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef<HTMLInputElement>;

  public newServerName: string;
  public newServerContent: string;

  constructor() { }

  ngOnInit() {
  }

  public onAddServer() {
    this.serverCreated.emit({serverName: this.newServerName, serverContent: this.serverContentInput.nativeElement.value});

  }

  public onAddBlueprint() {
    this.blueprintCreated.emit({serverName: this.newServerName, serverContent: this.serverContentInput.nativeElement.value});
  }

}
