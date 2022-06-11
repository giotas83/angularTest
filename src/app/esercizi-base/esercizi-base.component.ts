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
    ROUTING: 'routing',
    OBSERVABLE: 'observable',
    FORMS: 'forms',
    PIPES: 'pipes',
    HTTP: 'http',
    DYNAMIC: 'dynamic'
  };

  public eserciziDaMostrare: TipoEserciziDaMostrare = this.ESERCIZI_DA_MOSTRARE.BASICS;

  public readonly navigationButtons = [
    {
      style: 'margin-right: 5px;',
      label: 'BASICS',
      click: () => { this.eserciziDaMostrare = this.ESERCIZI_DA_MOSTRARE.BASICS;  },
      tipoEsercizio: this.ESERCIZI_DA_MOSTRARE.BASICS
    },
    {
      style: 'margin-right: 5px;',
      label: 'DATA BINDING',
      click: () => { this.eserciziDaMostrare = this.ESERCIZI_DA_MOSTRARE.DATA_BINDING; },
      tipoEsercizio: this.ESERCIZI_DA_MOSTRARE.DATA_BINDING
    },
    {
      style: 'margin-right: 5px;',
      label: 'DIRECTIVES',
      click: () => { this.eserciziDaMostrare = this.ESERCIZI_DA_MOSTRARE.DIRECTIVES; },
      tipoEsercizio: this.ESERCIZI_DA_MOSTRARE.DIRECTIVES
    },
    {
      style: 'margin-right: 5px;',
      label: 'SERVICES',
      click: () => { this.eserciziDaMostrare = this.ESERCIZI_DA_MOSTRARE.SERVICES; },
      tipoEsercizio: this.ESERCIZI_DA_MOSTRARE.SERVICES
    },
    {
      style: 'margin-right: 5px;',
      label: 'ROUTING',
      click: () => { this.eserciziDaMostrare = this.ESERCIZI_DA_MOSTRARE.ROUTING; },
      tipoEsercizio: this.ESERCIZI_DA_MOSTRARE.ROUTING
    },
    {
      style: 'margin-right: 5px;',
      label: 'OBSERVABLE',
      click: () => { this.eserciziDaMostrare = this.ESERCIZI_DA_MOSTRARE.OBSERVABLE; },
      tipoEsercizio:  this.ESERCIZI_DA_MOSTRARE.OBSERVABLE
    },
    {
      style: 'margin-right: 5px;',
      label: 'FORMS',
      click: () => { this.eserciziDaMostrare = this.ESERCIZI_DA_MOSTRARE.FORMS; },
      tipoEsercizio: this.ESERCIZI_DA_MOSTRARE.FORMS
    },
    {
      style: 'margin-right: 5px;',
      label: 'PIPES',
      click: () => { this.eserciziDaMostrare = this.ESERCIZI_DA_MOSTRARE.PIPES; },
      tipoEsercizio: this.ESERCIZI_DA_MOSTRARE.PIPES
    },
    {
      style: 'margin-right: 5px;',
      label: 'HTTP',
      click: () => { this.eserciziDaMostrare = this.ESERCIZI_DA_MOSTRARE.HTTP; },
      tipoEsercizio: this.ESERCIZI_DA_MOSTRARE.HTTP
    },
    {
      style: 'margin-right: 5px;',
      label: 'DYNAMIC COMPONENT',
      click: () => { this.eserciziDaMostrare = this.ESERCIZI_DA_MOSTRARE.DYNAMIC; },
      tipoEsercizio: this.ESERCIZI_DA_MOSTRARE.DYNAMIC
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

type TipoEserciziDaMostrare = 'basics' | 'data-binding' | 'directives' | 'services' | 'observable' | 'routing' | 'forms' | 'pipes' | 'http' | 'dynamic';

interface ITipoEserciziDaMostrare {
  BASICS: TipoEserciziDaMostrare;
  DATA_BINDING: TipoEserciziDaMostrare;
  DIRECTIVES: TipoEserciziDaMostrare;
  SERVICES: TipoEserciziDaMostrare;
  ROUTING: TipoEserciziDaMostrare;
  OBSERVABLE: TipoEserciziDaMostrare;
  FORMS: TipoEserciziDaMostrare;
  PIPES: TipoEserciziDaMostrare;
  HTTP: TipoEserciziDaMostrare;
  DYNAMIC: TipoEserciziDaMostrare;
}

