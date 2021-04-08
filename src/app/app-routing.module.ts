import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './app-project/page-not-found/page-not-found.component';
import { RecipesComponent } from './app-project/recipes/recipes.component';
import { ShoppingListComponent } from './app-project/shopping-list/shopping-list.component';
import { EserciziBaseComponent } from './esercizi-base/esercizi-base.component';
import { ExerciseAuthGuardService } from './esercizi-base/routing-11/exercise-auth-guard.service';
import { ExerciseCanDeactivateService } from './esercizi-base/routing-11/exercise-can-deactivate.service';
import { ExerciseResolveService } from './esercizi-base/routing-11/exercise-resolve.service';
import { RoutingAccessComponent } from './esercizi-base/routing-11/routing-access/routing-access.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/recipes'},
  { path: 'recipes', component: RecipesComponent },
  { path: 'shopping-list', component: ShoppingListComponent},
  { path: 'exercise-base',  component: EserciziBaseComponent},
  {
    path: 'exercise-base/routingAccess',
    canActivate: [ExerciseAuthGuardService],
    canDeactivate: [ExerciseCanDeactivateService],
    component: RoutingAccessComponent,
    data: {message: 'dati statici passati nella route con data: {message: dati-da-passare}'},
    resolve: {messaggioDinamico: ExerciseResolveService}
  },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
