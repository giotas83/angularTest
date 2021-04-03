import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ESERCIZI-TEST COMPONENTS
import { ServerComponent } from './esercizi-base/basics-2/server/server.component';
import { ServersComponent } from './esercizi-base/basics-2/servers/servers.component';
import { EserciziBaseComponent } from './esercizi-base/esercizi-base.component';
import { CockpitComponent } from './esercizi-base/comp-databinding-5/cockpit/cockpit.component';
import { ServerElementComponent } from './esercizi-base/comp-databinding-5/server-element/server-element.component';
import { DirectivesComponent } from './esercizi-base/directives-7/directives/directives.component';

// ESERCIZI-TEST DIRECTIVES
import { BasicHighlightDirective } from './esercizi-base/directives-7/directives/basic-highlight.directive';
import { StructuralDirective } from './esercizi-base/directives-7/directives/structural.directive';

// APP COMPONENTS
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from 'src/shared/dropdown.directice';

// APP DIRETTIVE


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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
