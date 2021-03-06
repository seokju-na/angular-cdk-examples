import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';
import { MenuComponent } from './menu/menu.component';
import { TooltipComponent } from './tooltip/tooltip.component';


export const APP_ROUTES: Routes = [
    {
        path: 'dialog',
        component: DialogComponent,
    },
    {
        path: 'tooltip',
        component: TooltipComponent,
    },
    {
        path: 'menu',
        component: MenuComponent,
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
