import { A11yModule } from '@angular/cdk/a11y';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';
import { MenuWithKeyManagerComponent } from './menu-with-key-manager/menu-with-key-manager.component';
import { TooltipWithFocusMonitorComponent } from './tooltip-with-focus-monitor/tooltip-with-focus-monitor.component';


@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        AppRoutingModule,
        A11yModule,
        OverlayModule,
    ],
    declarations: [
        AppComponent,
        DialogComponent,
        MenuWithKeyManagerComponent,
        TooltipWithFocusMonitorComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
