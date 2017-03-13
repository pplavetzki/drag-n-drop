import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './tasks.routing';
import {SmartadminModule} from "../shared/smartadmin.module";
import {TasksComponent} from "./tasks.component";

import {ServicesModule} from '../services/services.module';

import {DragulaModule} from 'ng2-dragula/ng2-dragula';

import {UtilsModule} from "../shared/utils/utils.module";


@NgModule({
  imports: [
    CommonModule,
    routing,
    SmartadminModule,
    DragulaModule,
    ServicesModule,
    UtilsModule
  ],
  declarations: [TasksComponent]
})
export class TasksModule { }
