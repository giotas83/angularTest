import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  public numbers = [1, 2, 3, 4, 5, 6];

  constructor() { }

  ngOnInit() {
  }

}
