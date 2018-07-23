import { AriaDescriber } from '@angular/cdk/a11y';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';


@Component({
    selector: 'sj-tooltip',
    templateUrl: './tooltip.component.html',
    styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent implements OnInit, OnDestroy, AfterViewInit {
    showTooltip = false;
    message = '툴팁 메시지 입니다';

    @ViewChild('toggle') toggleEl: ElementRef;

    constructor(
        private ariaDescriber: AriaDescriber,
    ) {
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        this.ariaDescriber.removeDescription(
            this.toggleEl.nativeElement,
            this.message,
        );
    }

    ngAfterViewInit(): void {


        this.ariaDescriber.describe(
            this.toggleEl.nativeElement,
            this.message,
        );


    }

    toggleTooltip(): void {
        this.showTooltip = !this.showTooltip;
    }

}
