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
    {
        path: 'task-import',
        loadChildren: ()=> System.import('./+task-import/task-import.module')
        .then((imports: any)=> imports.TaskImportModule)
    }
];

export const routing = RouterModule.forChild(tasksRoutes);

