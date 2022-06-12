import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './app-project/page-not-found/page-not-found.component';


const routes: Routes = [
  // ROTTE APP
  { path: '', pathMatch: 'full', redirectTo: '/recipes'},
  /* { prima di creare il recipeModule e caricarlo in lazyLoading
    path: 'recipes', 
    component: RecipesComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: '', component: RecipeStartComponent, resolve: [RecipeResolverService]},
      { path: 'new', component: RecipeEditComponent},
      { path: ':id', component: RecipeDetailComponent, resolve: [RecipeResolverService]},
      { path: ':id/edit', component: RecipeEditComponent,  resolve: [RecipeResolverService]}
    ]
  }, */
  { path: 'recipes', loadChildren: () => import('./app-project/recipes/recipe.module').then( m => m.RecipeModule)},
  { path: 'shopping-list', loadChildren: () => import('./app-project/shopping-list/shopping-list.module').then( m => m.ShoppingListModule)},
  { path: 'auth', loadChildren: () => import('./app-project/auth/auth.module').then( m => m.AuthModule)},

  // ROTTE ESERCIZI
  { path: 'exercise-base', loadChildren: ()=> import('./esercizi-base/esercizi-base.module').then( m => m.EserciziBaseModule)},
  /* { path: 'exercise-base',  component: EserciziBaseComponent},
  {
    path: 'exercise-base/routingAccess',
    canActivate: [ExerciseAuthGuardService], // controllo se accedere
    canDeactivate: [ExerciseCanDeactivateService], // controllo se uscire
    component: RoutingAccessComponent,
    data: {message: 'dati statici passati nella route con data: {message: dati-da-passare}'}, // dati statici
    resolve: {messaggioDinamico: ExerciseResolveService} // dati dinamici
  }, */
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
