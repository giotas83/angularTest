import { Component } from '@angular/core';


@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
           color: white;
        }
    `]
})
export class ServerComponent {

    public serverId: number = 10;
    public serverStatus: string;

    public readonly SERVER_STATUS = {
        ONLINE: 'online',
        OFFLINE: 'offline'
    };

    private readonly COLOR_STATUS = {
        GREEN: 'green',
        RED: 'red',
        ORANGE: 'orange'
    };

    constructor() {
        setTimeout(() => {
            this.serverStatus = Math.random() > 0.5 ? this.SERVER_STATUS.ONLINE : this.SERVER_STATUS.OFFLINE;
        } , 4000);
    }

    public getServerStatus(): string {
        return this.serverStatus;
    }

    public getColor(): string {
        // console.log('getcolor');
        if (!this.serverStatus) {
            return this.COLOR_STATUS.ORANGE;
        } else {
            return this.serverStatus === this.SERVER_STATUS.ONLINE ? this.COLOR_STATUS.GREEN : this.COLOR_STATUS.RED;
        }
    }
}
