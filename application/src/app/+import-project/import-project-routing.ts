import { Routes, RouterModule } from '@angular/router';
import {ImportProjectComponent} from "./import-project.component";
import {ModuleWithProviders} from "@angular/core";

export const importProjectRoutes: Routes = [
    {
        path: '',
        component: ImportProjectComponent,
        data: {
            pageTitle: 'Import Project'
        }
    }
];

export const routing = RouterModule.forChild(importProjectRoutes);