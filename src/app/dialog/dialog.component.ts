import { FocusTrap, FocusTrapFactory } from '@angular/cdk/a11y';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';


@Component({
    selector: 'sj-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit, OnDestroy {
    enableFocusTrap = false;
    enableSavingPreviouslyFocusedElement = false;
    enableAutoFocusToConfirmButton = false;
    showModal = false;

    @ViewChild('modalContainer') modalContainer: ElementRef;

    private focusTrap: FocusTrap;
    private elementFocusedBeforeDialogWasOpened: HTMLElement | null = null;

    constructor(
        private focusTrapFactory: FocusTrapFactory,
    ) {
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        if (this.focusTrap) {
            this.focusTrap.destroy();
        }
    }

    openModal(): void {
        this.showModal = true;

        // 1) 포커스 트랩 기능이 활성화 되어 있다면 포커스 트랩을 생성합니다.
        if (this.enableFocusTrap) {
            this.focusTrap = this.focusTrapFactory.create(
                this.modalContainer.nativeElement,
                false,
            );

            // 2) '확인' 버튼으로 AutoFocus하는 기능이 활성화 되어 있는 경우 뷰가 준비되었
            // 을때 확인 버튼으로 포커스를 이동합니다.
            if (this.enableAutoFocusToConfirmButton) {
                // 'FocusTrap#focusInitialElementWhenReady'은 호스트 DOM 아래 자식들
                // 중에서 '[cdkFocusInitial], [cdk-focus-initial]' 선택자를 사용하여
                // 요소를 찾아 포커스를 이동합니다.
                this.focusTrap.focusInitialElementWhenReady();
            } else {
                // 만약 AutoFocus 기능이 비활성화 상태인 경우 포커스가 가능한 첫 번째 자식
                // 요소를 찾아 포커스를 이동합니다.
                this.focusTrap.focusFirstTabbableElementWhenReady();
            }
        }

        // 3) 모달이 닫히면 이전 포커스로 이동하는 기능이 활성화 되어 있으면 현재 포커스 상태인
        // 요소를 캐시로 저장합니다.
        if (this.enableSavingPreviouslyFocusedElement) {
            this.elementFocusedBeforeDialogWasOpened =
                document.activeElement as HTMLElement;
        }
    }

    closeModal(): void {
        this.showModal = false;

        // 포커스 트랩이 생성되어 있다면 파괴합니다.
        if (this.focusTrap) {
            this.focusTrap.destroy();
        }

        // 저장된 이전 포커스 요소가 있다면 해당 요소로 포커스를 이동합니다.
        Promise.resolve(null).then(() => {
            if (this.elementFocusedBeforeDialogWasOpened) {
                this.elementFocusedBeforeDialogWasOpened.focus();
                this.elementFocusedBeforeDialogWasOpened = null;
            }
        });
    }
}
