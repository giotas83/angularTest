import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/shared/classes';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  public onAddToShoppingList() {
    // avrei potuto farlo utilizzando il servizio shippingListService
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
