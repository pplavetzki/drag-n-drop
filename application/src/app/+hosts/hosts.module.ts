import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './hosts.routing';
import {SmartadminModule} from "../shared/smartadmin.module";
import {HostsComponent} from "./hosts.component";
import {AccordionModule, CarouselModule} from "ng2-bootstrap";

import {ServicesModule} from '../services/services.module';

@NgModule({
  imports: [
    CommonModule,
    routing,
    SmartadminModule,
    ServicesModule,
    AccordionModule.forRoot(),
    CarouselModule.forRoot()
  ],
  declarations: [HostsComponent]
})
export class HostsModule { }
