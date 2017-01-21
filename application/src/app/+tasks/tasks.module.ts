import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './tasks.routing';
import {SmartadminModule} from "../shared/smartadmin.module";
import {TasksComponent} from "./tasks.component";


import {DragulaModule} from 'ng2-dragula/ng2-dragula';

@NgModule({
  imports: [
    CommonModule,
    routing,
    SmartadminModule,
    DragulaModule
  ],
  declarations: [TasksComponent]
})
export class TasksModule { }
