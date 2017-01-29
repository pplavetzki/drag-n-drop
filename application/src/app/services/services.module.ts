import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnsibleService } from './ansible/ansible.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    AnsibleService
  ]
})
export class ServicesModule {
  constructor( @Optional() @SkipSelf() parentModule: ServicesModule) {
    
  }
 }