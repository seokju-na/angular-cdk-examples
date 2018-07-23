import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';
import { MenuWithKeyManagerComponent } from './menu-with-key-manager/menu-with-key-manager.component';
import { TooltipWithFocusMonitorComponent } from './tooltip-with-focus-monitor/tooltip-with-focus-monitor.component';


export const APP_ROUTES: Routes = [
    {
        path: 'dialog',
        component: DialogComponent,
    },
    {
        path: 'tooltip-with-focus-monitor',
        component: TooltipWithFocusMonitorComponent,
    },
    {
        path: 'menu-with-key-manager',
        component: MenuWithKeyManagerComponent,
    },
    {
        path: '',
        redirectTo: '/dialog',
        pathMatch: 'full',
    },
];


@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
