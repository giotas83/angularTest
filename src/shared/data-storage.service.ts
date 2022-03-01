import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { RecipeService } from "src/app/app-project/recipes/recipe.service";
import { Recipe } from "./classes";

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {

    /*
    nel corso viene collegato con firebase, io invece non faccio il collegamento,
    nella post, put avrò un errore che gestisco con catcherror, così cmq quando chiamo questo servizio
    non scateno un errore ma nn salvo nulla
    successivamnte creerò un be con java  node per fare tutto a mano
    */

    constructor(private http: HttpClient, private recipeServ: RecipeService) {

    }

    storeRecipes() {
        const recipes: Recipe[] = this.recipeServ.getRecipes();
        return this.http.put('inserire un url', recipes)
            .pipe(
                catchError( err => of('fake response recipes salvati'))
            )
            .subscribe( resp => console.log(resp));
    }

    fetchRecipes(): Observable<Recipe[]> {
        return this.http.get<Recipe[]>('assets/recipes.json')
            .pipe(
                tap(recipes => {
                    const recip = recipes ? recipes : [];
                    this.recipeServ.setRecipes(recip);
                })
            )
    }
}