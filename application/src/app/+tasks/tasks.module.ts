import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './tasks.routing';
import {SmartadminModule} from "../shared/smartadmin.module";
import {TasksComponent} from "./tasks.component";

@NgModule({
  imports: [
    CommonModule,
    routing,
    SmartadminModule
  ],
  declarations: [TasksComponent]
})
export class TasksModule { }
