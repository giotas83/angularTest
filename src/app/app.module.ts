import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ESERCIZI-TEST COMPONENTS
import { ServerComponent } from './esercizi-base/basics-2/server/server.component';
import { ServersComponent } from './esercizi-base/basics-2/servers/servers.component';
import { EserciziBaseComponent } from './esercizi-base/esercizi-base.component';
import { CockpitComponent } from './esercizi-base/comp-databinding-5/cockpit/cockpit.component';
import { ServerElementComponent } from './esercizi-base/comp-databinding-5/server-element/server-element.component';
import { DirectivesComponent } from './esercizi-base/directives-7/directives/directives.component';
import { DependencyInjectionComponent } from './esercizi-base/services-depend-injection-9/dependency-injection/dependency-injection.component';
import { NewAccountComponent } from './esercizi-base/services-depend-injection-9/dependency-injection/new-account/new-account.component';
import { AccountComponent } from './esercizi-base/services-depend-injection-9/dependency-injection/account/account.component';
import { RoutingComponent } from './esercizi-base/routing-11/routing/routing.component';
import { ObservableComponent } from './esercizi-base/observable-13/observable/observable.component';


// ESERCIZI-TEST DIRECTIVES
import { BasicHighlightDirective } from './esercizi-base/directives-7/directives/basic-highlight.directive';
import { StructuralDirective } from './esercizi-base/directives-7/directives/structural.directive';

// APP COMPONENTS
import { HeaderComponent } from './app-project/header/header.component';
import { RecipesComponent } from './app-project/recipes/recipes.component';
import { RecipeListComponent } from './app-project/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './app-project/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './app-project/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './app-project/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './app-project/shopping-list/shopping-edit/shopping-edit.component';
// APP DIRETTIVE
import { DropdownDirective } from 'src/shared/dropdown.directice';
import { PageNotFoundComponent } from './app-project/page-not-found/page-not-found.component';
import { RoutingAccessComponent } from './esercizi-base/routing-11/routing-access/routing-access.component';
import { RecipeStartComponent } from './app-project/recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './app-project/recipes/recipe-edit/recipe-edit.component';
import { FormsComponent } from './esercizi-base/forms-15/forms/forms.component';
import { TemplateDrivenExampleComponent } from './esercizi-base/forms-15/template-driven-example/template-driven-example.component';
import { ReactiveFormExampleComponent } from './esercizi-base/forms-15/reactive-form-example/reactive-form-example.component';
import { TestInputComponent } from './esercizi-base/forms-15/template-driven-example/test-input.component';


@NgModule({
  declarations: [
    AppComponent,
    // APP COMPONENT
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    PageNotFoundComponent,
    RecipeStartComponent,
    RecipeEditComponent,

    // APP DIRETTIVE
    DropdownDirective,

    // DIRETTIVE ESERCIZI TEST
    BasicHighlightDirective,
    StructuralDirective,
    // COMPONENTI ESERCIZI TEST
    ServerComponent,
    ServersComponent,
    EserciziBaseComponent,
    CockpitComponent,
    ServerElementComponent,
    DirectivesComponent,
    DependencyInjectionComponent,
    NewAccountComponent,
    AccountComponent,
    ObservableComponent,
    RoutingComponent,
    RoutingAccessComponent,
    FormsComponent,
    TemplateDrivenExampleComponent,
    ReactiveFormExampleComponent,
    TestInputComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
