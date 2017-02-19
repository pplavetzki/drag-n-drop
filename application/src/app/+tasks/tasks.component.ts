import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';


import { ChatService } from '../shared/chat/chat.service';
import {DragulaService} from 'ng2-dragula/ng2-dragula';
import { AnsibleService } from '../services/ansible/ansible.service';

import { Play, Task } from '../models/models';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  private connection;
  messages:Array<string> = [];

  constructor(private _dragulaService:DragulaService, 
              private _chatService:ChatService,
              private _ansibleService:AnsibleService) { 
    _dragulaService.setOptions('second-bag', {
      copy:(el, source) => { return source.id === 'left'; },
      copySortSource: false,
      accepts: (el, target, source, sibling) => {
        return target.id !== 'left';
      }
    });
  }
//module='junos_get_facts.py', args=dict(host='{{inventory_hostname}}', savedir='.', user='root', passwd='Juniper'))
  executePlay(event) {
    let getFactsTask:Task = {
      name:"Get Facts",
      module: "junos_get_facts",
      args: {
        host: '{{inventory_hostname}}',
        savedir: '.',
        user:'root',
        passwd:'Juniper'
      }
    };
    let play:Play = {
      name: "Juniper Tasks",
      hosts: "all",
      host_list: ['150.10.0.3'],
      gatherFacts: "no",
      tasks: [getFactsTask]
    };
    console.log(play);
    let result = this._ansibleService.executePlay(play).subscribe(
                                results => {
                                    console.log(results);
                                }, 
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
  }

  ngOnInit() {
    this.connection = this._ansibleService.connectSubscription().subscribe(message => {
      if(message != "connected") { 
        this.messages.push(message);
      }
      console.log(message);
    });
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

}
