import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertDynamicComponent } from 'src/shared/dynamic-alert-component/alert-dynamic.component';
import { DynamicComponentService } from 'src/shared/dynamic-alert-component/dynamic-component.service';
import { SegnapostoDynamicDirective } from 'src/shared/dynamic-alert-component/segnaposto-dynamic.directive';

@Component({
  selector: 'app-dynamic-comp',
  templateUrl: './dynamic-comp.component.html',
  styleUrls: ['./dynamic-comp.component.scss']
})
export class DynamicCompComponent implements OnInit, OnDestroy {

  @ViewChild(SegnapostoDynamicDirective) segnapostoHost: SegnapostoDynamicDirective;

  private closeSubs: Subscription;

  constructor(private dynamicCmpService: DynamicComponentService, private cmpFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
      if (this.closeSubs) {
        this.closeSubs.unsubscribe();
      }
  }

  // utilizza un serizio, li ho inserito tutta a logica
  onShowDynamicAlert() {
    this.dynamicCmpService.showDynamicAlert('ciao sono un componente dinamico', this.segnapostoHost);
  }

  // logica qui, non utilizzo un servizio
  onShowDynamicAlertNoService() {
    const alertComponentFactory = this.cmpFactoryResolver.resolveComponentFactory(AlertDynamicComponent);

    const hostViewContainer = this.segnapostoHost.viewContainerRef;
    hostViewContainer.clear();

    const alertComponent = hostViewContainer.createComponent(alertComponentFactory);

    alertComponent.instance.message = 'Ciao sono un alert dinamico, creato con factory resolver';
    this.closeSubs = alertComponent.instance.close
      .subscribe( () => {
        this.closeSubs.unsubscribe();
        hostViewContainer.clear();
      });
  }


}
