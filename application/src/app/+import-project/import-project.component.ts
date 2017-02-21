import { Component, OnInit } from '@angular/core';

import * as YAML from 'yamljs';
import * as swig from 'swig';

import { AnsibleService } from '../services/ansible/ansible.service';


@Component({
  selector: 'app-import-project',
  templateUrl: './import-project.component.html',
  styleUrls: ['./import-project.component.css']
})
export class ImportProjectComponent implements OnInit {

    playbookYml:string = '';
    hostVars:string = '';
    groupVars:string = '';
    showPlaybook:boolean = false;

    constructor(private ansibleService:AnsibleService) { 

    }

    importPlaybook(event) {
        let result = this.ansibleService.loadFile('app/mock/upload/83983-2390f/playbook.yml').subscribe(data => {
            this.playbookYml = data;
            let playbook = YAML.parse(data);
            this.showPlaybook = true;
            // let tpl = swig.compile('name:  Gather Juniper Facts\n  junos_get_facts:\n    host={{inventory_hostname}}\n     savedir={{savedir}}     user={{user}}    passwd={{passwd}}');
            // let values = tpl(loadedYaml);
            console.log(playbook);
            console.log(data);
        });
        let hostVarYml = this.ansibleService.loadFile('app/mock/upload/83983-2390f/host_vars/150.10.0.3.yml').subscribe(data => {
            this.hostVars = data;
            this.showPlaybook = true;
        });
        let groupVarYml = this.ansibleService.loadFile('app/mock/upload/83983-2390f/group_vars/vsrx.yml').subscribe(data => {
            this.groupVars = data;
            this.showPlaybook = true;
        });
    }

    ngOnInit() {
    }

}