import { Injectable } from '@angular/core';
import { Recipe, Ingredient } from 'src/shared/classes';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {


    private recipes: Recipe[] = [
        new Recipe('A Test Recipe',
            'recipe test description',
            'assets/images/dcs-image-black.jpg',
            [new Ingredient('Apples', 2), new Ingredient('toast', 2)]),
        new Recipe('A Test Recipe 2 ',
            'recipe test description 2',
            'assets/images/dcs-image-black.jpg',
            [new Ingredient('Tomato', 2), new Ingredient('Apple', 6)])
    ];

    constructor(private shoppingListServices: ShoppingListService) {

    }

    getRecipe(index: number): Recipe {
        return this.recipes[index];
    }

    getRecipes(): Recipe[] {
        return this.recipes.slice(); // copia, tolto riferimento
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListServices.addIngredients(ingredients);
    }

}
