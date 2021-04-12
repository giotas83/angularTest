import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './app-project/page-not-found/page-not-found.component';
import { RecipeDetailComponent } from './app-project/recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './app-project/recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './app-project/recipes/recipe-start/recipe-start.component';
import { RecipesComponent } from './app-project/recipes/recipes.component';
import { ShoppingListComponent } from './app-project/shopping-list/shopping-list.component';
import { EserciziBaseComponent } from './esercizi-base/esercizi-base.component';
import { ExerciseAuthGuardService } from './esercizi-base/routing-11/exercise-auth-guard.service';
import { ExerciseCanDeactivateService } from './esercizi-base/routing-11/exercise-can-deactivate.service';
import { ExerciseResolveService } from './esercizi-base/routing-11/exercise-resolve.service';
import { RoutingAccessComponent } from './esercizi-base/routing-11/routing-access/routing-access.component';


const routes: Routes = [
  // ROTTE APP
  { path: '', pathMatch: 'full', redirectTo: '/recipes'},
  { path: 'recipes', component: RecipesComponent, children: [
      { path: '', component: RecipeStartComponent},
      { path: 'new', component: RecipeEditComponent},
      { path: ':id', component: RecipeDetailComponent},
      { path: ':id/edit', component: RecipeEditComponent}
    ]
  },
  { path: 'shopping-list', component: ShoppingListComponent},

  // ROTTE ESERCIZI
  { path: 'exercise-base',  component: EserciziBaseComponent},
  {
    path: 'exercise-base/routingAccess',
    canActivate: [ExerciseAuthGuardService], // controllo se accedere
    canDeactivate: [ExerciseCanDeactivateService], // controllo se uscire
    component: RoutingAccessComponent,
    data: {message: 'dati statici passati nella route con data: {message: dati-da-passare}'}, // dati statici
    resolve: {messaggioDinamico: ExerciseResolveService} // dati dinamici
  },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
