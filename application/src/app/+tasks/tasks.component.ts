import { Component, OnInit } from '@angular/core';


import {DragulaService} from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private _dragulaService:DragulaService) { 
    _dragulaService.setOptions('second-bag', {
      copy:(el, source) => { return source.id === 'left'; },
      copySortSource: false,
      accepts: (el, target, source, sibling) => {
        return target.id !== 'left';
      }
    });
  }

  ngOnInit() {
  }

}
