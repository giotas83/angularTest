import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/shared/classes';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  public ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() { }

  ngOnInit() {
  }

  public onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
