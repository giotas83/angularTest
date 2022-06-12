import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { SharedModule } from 'src/shared/shared.module';

const routes: Routes = [
    { path: '', component: ShoppingListComponent}
]

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent,
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(routes)

    ]
})
export class ShoppingListModule {

}