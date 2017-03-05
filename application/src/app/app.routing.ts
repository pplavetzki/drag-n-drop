/**
 * Created by griga on 7/11/16.
 */


import {Routes, RouterModule} from '@angular/router';
import {MainLayoutComponent} from "./shared/layout/app-layouts/main-layout.component";
import {AuthLayoutComponent} from "./shared/layout/app-layouts/auth-layout.component";
import {ModuleWithProviders} from "@angular/core";

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '', redirectTo: 'home', pathMatch: 'full'
            },
            {
                path: 'home',
                loadChildren: 'app/+home/home.module#HomeModule'
            },
            {path: 'import-project', loadChildren: 'app/+import-project/import-project.module#ImportProjectModule',data:{pageTitle: 'Import Project'}},
            {path: 'hosts', loadChildren: 'app/+hosts/hosts.module#HostsModule',data:{pageTitle: 'Hosts'}},
            //{path: 'tasks', loadChildren: 'app/+tasks/tasks.module#TasksModule',data:{pageTitle: 'Tasks'}}
        ]
    },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
