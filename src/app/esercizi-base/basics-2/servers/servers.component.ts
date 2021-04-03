import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  public serverCreated: boolean;
  public serverName: string;
  public servers = ['Test server 1', 'Test server 2'];

  constructor() {
  }

  ngOnInit() {
  }

  public onServerCreate(): void {
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }


}
