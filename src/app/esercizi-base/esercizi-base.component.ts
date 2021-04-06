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
    DIRECTIVES: 'directives',
    SERVICES: 'services',
    OBSERVABLE: 'observable'
  };

  public eserciziDaMostrare: TipoEserciziDaMostrare = this.ESERCIZI_DA_MOSTRARE.BASICS;

  public readonly navigationButtons = [
    {
      style: 'margin-right: 5px;',
      ngClass: {['active']: this.eserciziDaMostrare === this.ESERCIZI_DA_MOSTRARE.BASICS},
      label: 'BASICS',
      click: () => { this.eserciziDaMostrare = this.ESERCIZI_DA_MOSTRARE.BASICS; }
    },
    {
      style: 'margin-right: 5px;',
      ngClass: {['active']: this.eserciziDaMostrare === this.ESERCIZI_DA_MOSTRARE.DATA_BINDING},
      label: 'DATA BINDING',
      click: () => { this.eserciziDaMostrare = this.ESERCIZI_DA_MOSTRARE.DATA_BINDING; }
    },
    {
      style: 'margin-right: 5px;',
      ngClass: {['active']: this.eserciziDaMostrare === this.ESERCIZI_DA_MOSTRARE.DIRECTIVES},
      label: 'DIRECTIVES',
      click: () => { this.eserciziDaMostrare = this.ESERCIZI_DA_MOSTRARE.DIRECTIVES; }
    },
    {
      style: 'margin-right: 5px;',
      ngClass: {['active']: this.eserciziDaMostrare === this.ESERCIZI_DA_MOSTRARE.SERVICES},
      label: 'SERVICES',
      click: () => { this.eserciziDaMostrare = this.ESERCIZI_DA_MOSTRARE.SERVICES; }
    },
    {
      style: 'margin-right: 5px;',
      ngClass: {['active']: this.eserciziDaMostrare === this.ESERCIZI_DA_MOSTRARE.OBSERVABLE},
      label: 'OBSERVABLE',
      click: () => { this.eserciziDaMostrare = this.ESERCIZI_DA_MOSTRARE.OBSERVABLE; }
    }
  ];


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

type TipoEserciziDaMostrare = 'basics' | 'data-binding' | 'directives' | 'services' | 'observable';

interface ITipoEserciziDaMostrare {
  BASICS: TipoEserciziDaMostrare;
  DATA_BINDING: TipoEserciziDaMostrare;
  DIRECTIVES: TipoEserciziDaMostrare;
  SERVICES: TipoEserciziDaMostrare;
  OBSERVABLE: TipoEserciziDaMostrare;
}

