import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskImportRoutingModule } from './task-import-routing.module';
import { TaskImportComponent } from './task-import.component';

import {ServicesModule} from '../../services/services.module';

@NgModule({
  imports: [
    CommonModule,
    ServicesModule,
    TaskImportRoutingModule
  ],
  declarations: [TaskImportComponent]
})           
export class TaskImportModule { }