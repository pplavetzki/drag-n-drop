import { Component, OnInit } from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";

import * as YAML from 'yamljs';
import * as swig from 'swig';

import { AnsibleService } from '../../services/ansible/ansible.service';

@FadeInTop()
@Component({
  selector: 'sa-social',
  templateUrl: './task-import.component.html',
})
export class TaskImportComponent implements OnInit {

    playbookYml:string = '';
    showPlaybook:boolean = false;

    constructor(private ansibleService:AnsibleService) { 

    }

    importPlaybook(event) {
        let result = this.ansibleService.loadFile('playbook.yml').subscribe(data => {
            this.playbookYml = data;
            let playbook = YAML.parse(data);
            this.showPlaybook = true;
            // let tpl = swig.compile('name:  Gather Juniper Facts\n  junos_get_facts:\n    host={{inventory_hostname}}\n     savedir={{savedir}}     user={{user}}    passwd={{passwd}}');
            // let values = tpl(loadedYaml);
            console.log(playbook);
            console.log(data);
        });
    }

    ngOnInit() {
    }

}