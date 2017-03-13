import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { homeRouting } from './home.routing';
import {SmartadminModule} from "../shared/smartadmin.module";
import {HomeComponent} from "./home.component";

import {DragulaModule} from 'ng2-dragula/ng2-dragula';

@NgModule({
  imports: [
    CommonModule,
    homeRouting,
    SmartadminModule,
    DragulaModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
