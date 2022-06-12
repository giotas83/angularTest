import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DropdownDirective } from "./dropdown.directive";
import { AlertDynamicComponent } from "./dynamic-alert-component/alert-dynamic.component";
import { SegnapostoDynamicDirective } from "./dynamic-alert-component/segnaposto-dynamic.directive";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";

@NgModule({
    declarations: [
        DropdownDirective,
        LoadingSpinnerComponent,
        AlertDynamicComponent,
        SegnapostoDynamicDirective
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DropdownDirective,
        LoadingSpinnerComponent,
        AlertDynamicComponent,
        SegnapostoDynamicDirective,
        HttpClientModule
    ],
    entryComponents: [
        AlertDynamicComponent
    ]
})
export class SharedModule {

}