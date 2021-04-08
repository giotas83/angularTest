import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from '../exercise-can-deactivate.service';

@Component({
  selector: 'app-routing-access',
  templateUrl: './routing-access.component.html',
  styleUrls: ['./routing-access.component.scss']
})
export class RoutingAccessComponent implements OnInit, CanComponentDeactivate {

  // in questo componente, nell rotte c'è il controllo canDeactivate
  // al click sul pulsante viene chiamato il metodo goToExercisePAge che innesca una rotta
  // a questo punto si attiva il canDeactivate utilizzato nella rotta che chiama il metodo presente in questo componente
  // canDeactvate, qui faccio i controlli che mi servono e ritorno true/false
  // se ritorno true il canDeactivate presente nelle rotte permette di proseguire nella navigazione

  inputValue: string;

  dataFromRoute: string;
  dataDinamiciRoute: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe( (data: Params) => {
      console.log('data passati attraverso la route', data);
      this.dataFromRoute = data['message'];
      this.dataDinamiciRoute = data['messaggioDinamico']
    });
  }

  goToExercisePage() {
    this.router.navigate(['/exercise-base']);
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.inputValue ? window.confirm('Hai modificato il campo Input, vuoi veramente uscire ?') : true;
  }

}
