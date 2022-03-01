import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { Recipe } from "src/shared/classes";
import { DataStorageService } from "src/shared/data-storage.service";
import { RecipeService } from "./recipe.service";

// premette di caricare dei dati prima dell'atterragio
// in una pagina con la rotta

@Injectable({
    providedIn: 'root'
})
export class RecipeResolverService implements Resolve<Recipe[]> {

    constructor(private dataStorageService: DataStorageService, private recipeService: RecipeService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {
        
        const recipes = this.recipeService.getRecipes();

        if(recipes && !recipes.length) {
            return this.dataStorageService.fetchRecipes();
        } else {
            return of(recipes)
        }
    }

}