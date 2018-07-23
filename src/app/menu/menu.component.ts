import { FocusKeyManager, ListKeyManager } from '@angular/cdk/a11y';
import { AfterViewInit, Component, HostListener, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MenuItem, MenuItemComponent } from '../menu-item/menu-item.component';


@Component({
    selector: 'sj-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, AfterViewInit {
    enableWrapping = false;
    useFocusKeyManager = false;

    readonly items: MenuItem[] = [
        { name: '페일에일' },
        { name: '스타우트' },
        { name: 'IPA' },
        { name: '필스너' },
        { name: '세종' },
        { name: '윗비어' },
        { name: '바이젠' },
    ];

    private keyManager: ListKeyManager<any> | FocusKeyManager<any>;

    @ViewChildren(MenuItemComponent) menuItems: QueryList<MenuItemComponent>;

    constructor() {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        this.keyManager = new ListKeyManager<any>(this.menuItems);
    }

    isActiveItem(index: number): boolean {
        if (!this.keyManager) {
            return false;
        }

        return this.keyManager.activeItemIndex === index;
    }

    activate(index: number): void {
        this.keyManager.setActiveItem(index);
    }

    @HostListener('keydown', ['$event'])
    _handleKeyDown(event: KeyboardEvent): void {
        this.keyManager.onKeydown(event);
    }

    updateKeyManager(): void {
        const previouslyActiveItemIndex = this.keyManager.activeItemIndex;

        if (this.useFocusKeyManager) {


            this.keyManager = new FocusKeyManager<any>(this.menuItems)
                .withVerticalOrientation(true)
                .withWrap(this.enableWrapping);


        } else {


            this.keyManager = new ListKeyManager<any>(this.menuItems)
                .withVerticalOrientation(true)
                .withWrap(this.enableWrapping);


        }

        if (previouslyActiveItemIndex !== null) {
            this.keyManager.setActiveItem(previouslyActiveItemIndex);
        }
    }
}
