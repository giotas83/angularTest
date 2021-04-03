import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/shared/classes';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  public selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
