import { SegnapostoDynamicDirective } from 'src/shared/dynamic-alert-component/segnaposto-dynamic.directive';
import { ComponentFactoryResolver, Injectable } from "@angular/core";
import { AlertDynamicComponent } from "./alert-dynamic.component";
import { Subscription } from 'rxjs';


@Injectable({providedIn: 'root'})
export class DynamicComponentService {

    private closeSubscription: Subscription;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {

    }

    showDynamicAlert(message: string, directiveSegnaposto: SegnapostoDynamicDirective) {
        // alertCmpFactory: fabbrica che sa come creare un componente, collegandolo ad angular
        const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(AlertDynamicComponent);
        const hostViewContainerRef = directiveSegnaposto.viewContainerRef;
        hostViewContainerRef.clear(); // pulizia se ho mostrato li qualcosa prima

        // creo il componente nel posto scelto, così il componente verrà visualizzato. inserisco anche il comp in una variabile per interagire cn esso
        const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);

        //  passo il messaggio nel componente
        componentRef.instance.message = message;

        // leggo l evento close creato nel compoennte in @Output
        this.closeSubscription = componentRef.instance.close.subscribe( () => {
            this.closeSubscription.unsubscribe();
            hostViewContainerRef.clear(); // pulizia del contenitore che mostra il componente
        })
    }
}