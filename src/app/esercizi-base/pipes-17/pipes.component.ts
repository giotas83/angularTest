import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { delay, timeout } from 'rxjs/operators';
@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  appStatus = of('online').pipe(delay(3000));

  servers: Server[] = [
    {
      instanceType: 'medium',
      name: 'Production Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'critical',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Testing Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    }
  ];

  filteredStatus ='';

  constructor() { }

  ngOnInit() {
  }

  getStatusClasses(server: Server) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical',
    }
  }

}

type Server = {
  instanceType: string
  name: string,
  status: string,
  started: Date
}
