import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/shared/shared.module";
import { AuthComponent } from "./auth.component";

const routes: Routes = [
    { path: '', component: AuthComponent},
]

@NgModule({
    declarations: [
        AuthComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports: [

    ]
})
export class AuthModule {

}