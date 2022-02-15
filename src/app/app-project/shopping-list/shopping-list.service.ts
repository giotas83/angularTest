import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from 'src/shared/classes';

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService {

    public ingredientsChanged: Subject<Ingredient[]> = new Subject<Ingredient[]>();
    public startEditing: Subject<number> = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ];

    constructor() {

    }

    getIngredients(): Ingredient[] {
        return this.ingredients.slice(); // copia array
    }

    getIngredient(index: number): Ingredient {
        return this.ingredients[index];
    }

    public addIngredient(ingredient: Ingredient): void {
        this.modifyOrAddIngredient(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }


    public addIngredients(ingredients: Ingredient[]) {
        for (const ingredient of ingredients) {
           this.modifyOrAddIngredient(ingredient);
        }
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    // aggiorna se presente, aggiunge se mancante
    private modifyOrAddIngredient(newIngredient: Ingredient) {
        if (!!this.ingredients.find( ingr => newIngredient.name.toLowerCase() === ingr.name.toLowerCase())) {
            this.ingredients.forEach( (ing, index, arr) => {
                if (ing.name.toLowerCase() === newIngredient.name.toLowerCase()) {
                    arr[index].amounth += newIngredient.amounth;
                }
            });
        } else {
            this.ingredients.push(newIngredient);
        }
    }

}
