import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data/data.service';
import { Host } from '../models/Host';
import {ViewChild} from "@angular/core/src/metadata/di";
import {FadeInTop} from "../shared/animations/fade-in-top.decorator";

@FadeInTop()
@Component({
  selector: 'app-hosts',
  templateUrl: './hosts.component.html',
  styleUrls: ['./hosts.component.css']
})
export class HostsComponent implements OnInit {

  hosts:Array<Host> = [];
  host:any = {};
  input:string = '';
  hostFiles:any = [];

  constructor(private dataService:DataService) { }

  public state: any = {
    tabs: {
      demo1: 0,
      demo2: 'tab-r1',
      demo3: 'hr1',
      demo4: 'AA',
      demo5: 'iss1',
      demo6: 'l1',
      demo7: 'tab1',
      demo8: 'hb1',
      demo9: 'A1',
      demo10: 'is1'
    },

    carousel: {
      demo1: {
        interval: 2000,
        noWrap: false,
        slides: [
          {
            title: 'Title 1',
            text: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
            src: 'assets/img/demo/m3.jpg',
          },
          {
            title: 'Title 2',
            text: 'Dolores justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
            src: 'assets/img/demo/m2.jpg',
          },
          {
            title: 'Title 3',
            text: 'Lorem justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
            src: 'assets/img/demo/m1.jpg',
          },
        ]
      },
      demo2: {
        interval: 3000,
        noWrap: false,
        slides: [
          {
            title: 'Title 2',
            text: 'Dolores justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
            src: 'assets/img/demo/m2.jpg',
          },
          {
            title: 'Title 1',
            text: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
            src: 'assets/img/demo/m3.jpg',
          },
          {
            title: 'Title 3',
            text: 'Lorem justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
            src: 'assets/img/demo/m1.jpg',
          },
        ]
      }
    }
  };

  ngOnInit() {
    let hostVarYml = this.dataService.getHosts().subscribe(data => {

        for(let file of data.hosts) {
            let hostFile = {
                file:file.file,
                groups:''
            };
            let message = '';
            for(let host of file.groups) {
                if(host !== null && typeof host === 'object') {
                    let groupName = Object.keys(host)[0];
                    message += '[' + groupName + ']' + '\r';
                    for(let val of host[groupName]) {
                        message += val + '\r';
                    }
                    message += '\r';                    
                }
                else {
                    message += host + '\r';
                }
            }
            hostFile.groups = message.substr(0, (message.length - 1));
            this.hostFiles.push(hostFile);
        }
    });
  }

}
