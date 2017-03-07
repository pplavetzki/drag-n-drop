import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TaskImportComponent} from "./task-import.component";

const routes: Routes = [{
  path: '',
  component: TaskImportComponent,
  data: {pageTitle: 'Task Import'}
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TaskImportRoutingModule { }