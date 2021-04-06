import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/shared/classes';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  public selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe( (recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }

}
