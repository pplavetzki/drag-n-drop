import { Routes, RouterModule } from '@angular/router';
import {HostsComponent} from "./hosts.component";
import {ModuleWithProviders} from "@angular/core";

export const hostsRoutes: Routes = [
    {
        path: '',
        component: HostsComponent,
        data: {
            pageTitle: 'Home'
        }
    }
];

export const routing = RouterModule.forChild(hostsRoutes);