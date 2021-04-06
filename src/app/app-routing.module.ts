import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './app-project/page-not-found/page-not-found.component';
import { RecipesComponent } from './app-project/recipes/recipes.component';
import { ShoppingListComponent } from './app-project/shopping-list/shopping-list.component';
import { EserciziBaseComponent } from './esercizi-base/esercizi-base.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/recipes'},
  { path: 'recipes', component: RecipesComponent },
  { path: 'shopping-list', component: ShoppingListComponent},
  { path: 'exercise-base', component: EserciziBaseComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
