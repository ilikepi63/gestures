declare function makeDraggable(el: HTMLElement, handleDragStart: (event: Event) => void, handleDragEnd: (event: Event) => void): void;
declare function makeResizable(ref: HTMLElement, placedRef: HTMLElement): void;
declare const _default: {
    makeDraggable: typeof makeDraggable;
    makeResizable: typeof makeResizable;
};
export default _default;
