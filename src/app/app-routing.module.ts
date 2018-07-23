import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuWithKeyManagerComponent } from './menu-with-key-manager/menu-with-key-manager.component';
import { ModalWithFocusTrapComponent } from './modal-with-focus-trap/modal-with-focus-trap.component';
import { TooltipWithFocusMonitorDirective } from './tooltip-with-focus-monitor/tooltip-with-focus-monitor.directive';
import { WelcomeComponent } from './welcome/welcome.component';


export const APP_ROUTES: Routes = [
    {
        path: '',
        component: WelcomeComponent,
    },
    {
        path: 'modal-with-focus-trap',
        component: ModalWithFocusTrapComponent,
    },
    {
        path: 'tooltip-with-focus-monitor',
        component: TooltipWithFocusMonitorDirective,
    },
    {
        path: 'menu-with-key-manager',
        component: MenuWithKeyManagerComponent,
    },
];


@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
