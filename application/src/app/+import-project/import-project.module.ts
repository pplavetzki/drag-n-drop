import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './import-project-routing';
import {SmartadminModule} from "../shared/smartadmin.module";
import {ImportProjectComponent} from "./import-project.component";

@NgModule({
  imports: [
    CommonModule,
    routing,
    SmartadminModule
  ],
  declarations: [ImportProjectComponent]
})
export class ImportProjectModule { }