import { Routes, RouterModule } from '@angular/router';
import {TasksComponent} from "./tasks.component";
import {ModuleWithProviders} from "@angular/core";

export const tasksRoutes: Routes = [
    {
        path: '',
        component: TasksComponent,
        data: {
            pageTitle: 'Tasks'
        }
    },
    { path: 'task-import',loadChildren: 'app/+tasks/+task-import/task-import.module#TaskImportModule', data: {pageTitle: 'Task Import'} }
];

export const routing = RouterModule.forChild(tasksRoutes);

