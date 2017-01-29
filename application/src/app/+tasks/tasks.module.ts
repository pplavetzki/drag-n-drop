import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './tasks.routing';
import {SmartadminModule} from "../shared/smartadmin.module";
import {TasksComponent} from "./tasks.component";
import { ChatModule } from "../shared/chat/chat.module";
import {ServicesModule} from '../services/services.module';

import {DragulaModule} from 'ng2-dragula/ng2-dragula';


@NgModule({
  imports: [
    CommonModule,
    routing,
    SmartadminModule,
    DragulaModule,
    ChatModule,
    ServicesModule
  ],
  declarations: [TasksComponent]
})
export class TasksModule { }
