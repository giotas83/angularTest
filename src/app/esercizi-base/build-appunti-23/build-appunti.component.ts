import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-build-comp',
  templateUrl: './build-appunti.component.html',
  styleUrls: ['./build-appunti.component.scss']
})
export class BuildAppuntiComponent implements OnInit {

  public valore = environment.chiaveSalvataEsempio;

  constructor() { }

  ngOnInit() {
  }

}
