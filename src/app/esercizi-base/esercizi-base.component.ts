import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-esercizi-base',
  templateUrl: './esercizi-base.component.html',
  styleUrls: ['./esercizi-base.component.scss']
})
export class EserciziBaseComponent implements OnInit {

  public readonly ESERCIZI_DA_MOSTRARE: ITipoEserciziDaMostrare = {
    BASICS: 'basics',
    DATA_BINDING: 'data-binding',
    DIRECTIVES: 'directives'
  };


  public eserciziDaMostrare: TipoEserciziDaMostrare = this.ESERCIZI_DA_MOSTRARE.BASICS;

  public serverElements = [{type: 'server', name: 'test server', content: 'is a test'}];


  constructor() { }

  ngOnInit() {
  }

  public onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  public onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }


}

type TipoEserciziDaMostrare = 'basics' | 'data-binding' | 'directives';

interface ITipoEserciziDaMostrare {
  BASICS: TipoEserciziDaMostrare;
  DATA_BINDING: TipoEserciziDaMostrare;
  DIRECTIVES: TipoEserciziDaMostrare;
}

