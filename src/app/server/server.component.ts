import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.sass'],
})
export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';
  showDetails = false;
  clickLog = [];

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  onDisplayDetails() {
    this.showDetails = !this.showDetails;
    this.clickLog.push('Clicked on: ' + Date().toString());
  }
}
