import { Component, OnInit } from '@angular/core';


import {DragulaService, DragulaModule} from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
