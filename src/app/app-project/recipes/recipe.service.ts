import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Recipe, Ingredient } from 'src/shared/classes';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {

    private recipesChangedSubj: Subject<Recipe[]> = new Subject<Recipe[]>();
    public recipesChangedObserv: Observable<Recipe[]> = this.recipesChangedSubj.asObservable();


    /* private recipes: Recipe[] = [
        new Recipe('A Test Recipe',
            'recipe test description',
            'assets/images/dcs-image-black.jpg',
            [new Ingredient('Apples', 2), new Ingredient('toast', 2)]),
        new Recipe('A Test Recipe 2 ',
            'recipe test description 2',
            'assets/images/dcs-image-black.jpg',
            [new Ingredient('Tomato', 2), new Ingredient('Apple', 6)])
    ]; */

// in atterraggio prendo recipes dal resolve della rotta
    private recipes: Recipe[] = []

    constructor(private shoppingListServices: ShoppingListService) {

    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChangedSubj.next(this.recipes.slice());
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

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChangedSubj.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChangedSubj.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChangedSubj.next(this.recipes.slice());
    }

}
