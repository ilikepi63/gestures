
declare module "gestures" {
    export function makeResizable(ref: HTMLElement, placedRef: HTMLElement): void;
    export function makeDraggable(el: HTMLElement, handleDragStart: (event: Event) => void, handleDragEnd: (event: Event) => void): void;
}
