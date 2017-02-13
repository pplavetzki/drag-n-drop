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

  executePlay(event) {
    console.log('clicked the play');
    let getFactsTask:Task = {
      name:"Get Facts",
      module: "junos_facts"
    };
    let play:Play = {
      name: "Do all tasks",
      hosts: "all",
      host_list: ['150.10.0.3'],
      gatherFacts: false,
      tasks: [getFactsTask]
    };
    console.log(play);
    let result = this._ansibleService.executePlay(play).subscribe(
                                results => {
                                    // Emit list event
                                    console.log('got results');
                                    console.log(results);
                                }, 
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
  }

  ngOnInit() {
    this.connection = this._ansibleService.connectSubscription().subscribe(message => {
      console.log(message);
    });
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

}
