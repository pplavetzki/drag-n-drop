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
    }
];

export const routing = RouterModule.forChild(tasksRoutes);

