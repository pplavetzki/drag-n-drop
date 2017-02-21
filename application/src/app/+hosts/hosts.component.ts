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

  constructor(private dataService:DataService) { }

  ngOnInit() {
    let hostVarYml = this.dataService.getHosts().subscribe(data => {

        this.hosts = data;
    });
  }

}
