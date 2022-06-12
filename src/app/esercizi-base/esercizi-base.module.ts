import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/shared/shared.module";
import { ServerComponent } from "./basics-2/server/server.component";
import { ServersComponent } from "./basics-2/servers/servers.component";
import { CockpitComponent } from "./comp-databinding-5/cockpit/cockpit.component";
import { ServerElementComponent } from "./comp-databinding-5/server-element/server-element.component";
import { BasicHighlightDirective } from "./directives-7/directives/basic-highlight.directive";
import { DirectivesComponent } from "./directives-7/directives/directives.component";
import { StructuralDirective } from "./directives-7/directives/structural.directive";
import { DynamicCompComponent } from "./dynamic-comp-21/dynamic-comp.component";
import { EserciziBaseComponent } from "./esercizi-base.component";
import { FormsComponent } from "./forms-15/forms/forms.component";
import { ReactiveFormExampleComponent } from "./forms-15/reactive-form-example/reactive-form-example.component";
import { TemplateDrivenExampleComponent } from "./forms-15/template-driven-example/template-driven-example.component";
import { TestInputComponent } from "./forms-15/template-driven-example/test-input.component";
import { HttpComponent } from "./http-18/http.component";
import { ObservableComponent } from "./observable-13/observable/observable.component";
import { FilterPipe } from "./pipes-17/filter.pipe";
import { PipesComponent } from "./pipes-17/pipes.component";
import { ShortenPipe } from "./pipes-17/shorten.pipe";
import { ExerciseAuthGuardService } from "./routing-11/exercise-auth-guard.service";
import { ExerciseCanDeactivateService } from "./routing-11/exercise-can-deactivate.service";
import { ExerciseResolveService } from "./routing-11/exercise-resolve.service";
import { RoutingAccessComponent } from "./routing-11/routing-access/routing-access.component";
import { RoutingComponent } from "./routing-11/routing/routing.component";
import { AccountComponent } from "./services-depend-injection-9/dependency-injection/account/account.component";
import { DependencyInjectionComponent } from "./services-depend-injection-9/dependency-injection/dependency-injection.component";
import { NewAccountComponent } from "./services-depend-injection-9/dependency-injection/new-account/new-account.component";

const routes: Routes = [
    { path: '',  children: [
        {
            path: '',
            component: EserciziBaseComponent
        },
        {
            path: 'routingAccess',
            canActivate: [ExerciseAuthGuardService], // controllo se accedere
            canDeactivate: [ExerciseCanDeactivateService], // controllo se uscire
            component: RoutingAccessComponent,
            data: {message: 'dati statici passati nella route con data: {message: dati-da-passare}'}, // dati statici
            resolve: {messaggioDinamico: ExerciseResolveService} // dati dinamici
        }]
    },
   /* {
         path: 'exercise-base/routingAccess',
        canActivate: [ExerciseAuthGuardService], // controllo se accedere
        canDeactivate: [ExerciseCanDeactivateService], // controllo se uscire
        component: RoutingAccessComponent,
        data: {message: 'dati statici passati nella route con data: {message: dati-da-passare}'}, // dati statici
        resolve: {messaggioDinamico: ExerciseResolveService} // dati dinamici
    }, */
]

@NgModule({
    declarations: [
        EserciziBaseComponent,
        BasicHighlightDirective,
        StructuralDirective,
        ServerComponent,
        ServersComponent,
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
        TestInputComponent,
        PipesComponent,
        ShortenPipe,
        FilterPipe,
        HttpComponent,
        DynamicCompComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        SharedModule
    ],
    exports: [

    ]
})
export class EserciziBaseModule {

}