import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.sass'],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus = 'No server was created';
  serverName = 'TestServer';
  userName = '';
  serverCreated = false;
  servers = ['Server1', 'Server2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = !this.allowNewServer;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreationStatus =
      'Server was created with name ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onResetUserName() {
    this.userName = '';
  }

  onUpdateServerName($event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log($event.target.value);
  }
}
