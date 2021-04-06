import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/shared/classes';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  public ingredients: Ingredient[]

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged
      .subscribe( (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      });
  }

  public onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
