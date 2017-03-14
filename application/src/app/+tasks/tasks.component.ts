import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import * as YAML from 'yamljs';
import * as swig from 'swig';

import {DragulaService} from 'ng2-dragula/ng2-dragula';
import { AnsibleService } from '../services/ansible/ansible.service';

import { Play, Task } from '../models/models';

import {KeysPipe} from '../shared/utils/keys.pipe';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  private connection;
  messages:Array<string> = [];
  testYml:string = '';

  isdisabled:boolean = true;

  tasks:Array<Task> = [];
  play:Array<Task> = [];

  constructor(private _dragulaService:DragulaService, 
              private _ansibleService:AnsibleService) { 
    _dragulaService.setOptions('second-bag', {
      copy:(el, source) => { return source.id === 'left'; },
      copySortSource: false,
      accepts: (el, target, source, sibling) => {
        return target.id !== 'left';
      }
    });
    _dragulaService.drop.subscribe((value) => {
      console.log(`drop: ${value[0]}`);
      this.onDrop(value.slice(1));
    });
    _dragulaService.dropModel.subscribe((value) => {
      this.onDropModel(value);
    });
  }

  private onDropModel(value) {
    if(this.play && this.play.length > 0) {
      this.isdisabled = false;
    }
  }

  private onDrop(args) {
    let [e, el] = args;
    // do something
  }

//module='junos_get_facts.py', args=dict(host='{{inventory_hostname}}', savedir='.', user='root', passwd='Juniper'))
  executePlay(event) {
    let getFactsTask:Task = {
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

    // let result = this._ansibleService.loadFile('playbook.yml').subscribe(data => {
    //     this.testYml = data;
    //     let loadedYaml = YAML.parse(data);
    //     let tpl = swig.compile('name:  Gather Juniper Facts\n  junos_get_facts:\n    host={{inventory_hostname}}\n     savedir={{savedir}}     user={{user}}    passwd={{passwd}}');
    //     let values = tpl(loadedYaml);
    //     console.log(values);
    //     console.log(data);
    // });

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
    this.tasks.push({
        name: "Gather Juniper Facts",
        module: "junos_get_facts",
        args: {
          host: '{{inventory_hostname}}',
          savedir: '.',
          user:'root',
          passwd:'Juniper'
        }
      });
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

}
