import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  UserName = '';
  serverstatus = "online";
  servers = ['1', '2', '3'];

  textExist = false;
  log = [];
  constructor() { }

  ngOnInit() {
  }
  createServer(){
    this.servers.push('4');
    console.log("fd");
  }
  toggleButton() {
    this.textExist = !this.textExist;
    this.log.push(this.log.length + 1 );
  }

}
