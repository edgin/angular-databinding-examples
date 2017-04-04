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
  constructor() { 
    setTimeout(()=>{this.allowNewServer = true;}, 2000)
   }

  ngOnInit() {
  }

  onCreationServer(){
    this.serverCreationStatus = "Server was created . Name is " +this.serverName;
    console.log('komunicira');
  }

  onUpdateServerName(event: Event){
    //console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
