import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html', 
  //`
    // <app-server></app-server>
    // <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverCreationStatus = "No server was created";
  allowNewServer = false;
  serverName = 'trallaa';
  serverCreated = false;
  serverId:number = 10;
  serverStatus = 'offline';
  servers = ['testserver','testservers2'];

  constructor() { 
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    setTimeout(()=>{this.allowNewServer = true;}, 2000);

   }

  ngOnInit() {
  }

  onCreationServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created . Name is " +this.serverName;
    console.log('komunicira');
  }

  getColor (){
    return this.serverStatus === 'onilne' ? 'green' : 'red';
  }

  onUpdateServerName(event: Event){
    //console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
