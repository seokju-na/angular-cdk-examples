import { Component, ElementRef, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';


export interface MenuItem {
    name: string;
}


@Component({
    selector: 'sj-menu-item',
    templateUrl: './menu-item.component.html',
    styleUrls: ['./menu-item.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class MenuItemComponent implements OnInit {
    @Input() item: MenuItem;
    @Input() active = false;
    @Input() focusable = false;

    @HostBinding('class.MenuItem') private className = true;

    @HostBinding('class.MenuItem--activated')
    private get activatedClassName() {
        return this.active;
    }

    @HostBinding('attr.tabindex')
    private get tabIndex() {
        return this.focusable
            ? this.active
                ? 0
                : -1
            : null;
    }

    constructor(public _elementRef: ElementRef) {
    }

    ngOnInit(): void {
    }

    focus(): void {
        this._elementRef.nativeElement.focus();
    }
}
