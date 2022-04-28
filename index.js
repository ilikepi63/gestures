"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeDraggable(el, handleDragStart, handleDragEnd) {
    function addDraggable(el) {
        el.draggable = true;
        el.style.position = "absolute";
        el.style.cursor = "grab";
        el === null || el === void 0 ? void 0 : el.addEventListener("mousedown", function () {
            if (el)
                el.style.cursor = "grabbing";
        });
        el === null || el === void 0 ? void 0 : el.addEventListener("mouseup", function () {
            if (el)
                el.style.cursor = "grab";
        });
    }
    function addDragstart(el) {
        el.addEventListener("dragstart", handleDragStart, false);
    }
    function addDragend(el) {
        el.addEventListener('dragend', handleDragEnd, false);
    }
    addDraggable(el);
    addDragstart(el);
    addDragend(el);
}
function makeResizable(ref, placedRef) {
    var refWithDots = placedRef ? placedRef : ref;
    function addCss(divRefs) {
        for (var i = 0; i < divRefs.length; i++) {
            divRefs[i].style.width = "10px";
            divRefs[i].style.height = "10px";
            divRefs[i].style.position = "absolute";
        }
    }
    var topLeftResizer = document.createElement("div");
    var topRightResizer = document.createElement("div");
    var bottomLeftResizer = document.createElement("div");
    var bottomRightResizer = document.createElement("div");
    refWithDots.appendChild(topLeftResizer);
    refWithDots.appendChild(topRightResizer);
    refWithDots.appendChild(bottomLeftResizer);
    refWithDots.appendChild(bottomRightResizer);
    addCss([topLeftResizer, topRightResizer, bottomLeftResizer, bottomRightResizer]);
    topLeftResizer.style.left = "-5px";
    topLeftResizer.style.top = "-5px";
    topLeftResizer.style.cursor = "nwse-resize";
    topRightResizer.style.right = "-5px";
    topRightResizer.style.top = "-5px";
    topRightResizer.style.cursor = "nesw-resize";
    bottomLeftResizer.style.left = "-5px";
    bottomLeftResizer.style.bottom = "-5px";
    bottomLeftResizer.style.cursor = "nesw-resize";
    bottomRightResizer.style.right = "-5px";
    bottomRightResizer.style.bottom = "-5px";
    bottomRightResizer.style.cursor = "nwse-resize";
    var originalWidth, originalHeight, originalX, originalY, originalMouseX, originalMouseY;
    var originalWidthDots, originalHeightDots, originalXDots, originalYDots;
    topLeftResizer.addEventListener("mousedown", function (event) {
        event.preventDefault();
        originalWidth = parseFloat(getComputedStyle(ref, null).getPropertyValue('width').replace('px', ''));
        originalWidthDots = parseFloat(getComputedStyle(refWithDots, null).getPropertyValue('width').replace('px', ''));
        originalHeight = parseFloat(getComputedStyle(ref, null).getPropertyValue('height').replace('px', ''));
        originalHeightDots = parseFloat(getComputedStyle(refWithDots, null).getPropertyValue('height').replace('px', ''));
        originalX = ref.getBoundingClientRect().left;
        originalXDots = refWithDots.getBoundingClientRect().left;
        originalY = ref.getBoundingClientRect().top;
        originalYDots = refWithDots.getBoundingClientRect().top;
        originalMouseX = event.pageX;
        originalMouseY = event.pageY;
        window.addEventListener('mousemove', resizeTopLeft);
        window.addEventListener('mouseup', function () { return window.removeEventListener("mousemove", resizeTopLeft); });
    });
    topRightResizer.addEventListener("mousedown", function (event) {
        event.preventDefault();
        originalWidth = parseFloat(getComputedStyle(ref, null).getPropertyValue('width').replace('px', ''));
        originalWidthDots = parseFloat(getComputedStyle(refWithDots, null).getPropertyValue('width').replace('px', ''));
        originalHeight = parseFloat(getComputedStyle(ref, null).getPropertyValue('height').replace('px', ''));
        originalHeightDots = parseFloat(getComputedStyle(refWithDots, null).getPropertyValue('height').replace('px', ''));
        originalX = ref.getBoundingClientRect().left;
        originalXDots = refWithDots.getBoundingClientRect().left;
        originalY = ref.getBoundingClientRect().top;
        originalYDots = refWithDots.getBoundingClientRect().top;
        originalMouseX = event.pageX;
        originalMouseY = event.pageY;
        window.addEventListener('mousemove', resizeTopRight);
        window.addEventListener('mouseup', function () { return window.removeEventListener("mousemove", resizeTopRight); });
    });
    bottomLeftResizer.addEventListener("mousedown", function (event) {
        event.preventDefault();
        originalWidth = parseFloat(getComputedStyle(ref, null).getPropertyValue('width').replace('px', ''));
        originalWidthDots = parseFloat(getComputedStyle(refWithDots, null).getPropertyValue('width').replace('px', ''));
        originalHeight = parseFloat(getComputedStyle(ref, null).getPropertyValue('height').replace('px', ''));
        originalHeightDots = parseFloat(getComputedStyle(refWithDots, null).getPropertyValue('height').replace('px', ''));
        originalX = ref.getBoundingClientRect().left;
        originalXDots = refWithDots.getBoundingClientRect().left;
        originalY = ref.getBoundingClientRect().top;
        originalYDots = refWithDots.getBoundingClientRect().top;
        originalMouseX = event.pageX;
        originalMouseY = event.pageY;
        window.addEventListener('mousemove', resizeBottomLeft);
        window.addEventListener('mouseup', function () { return window.removeEventListener("mousemove", resizeBottomLeft); });
    });
    bottomRightResizer.addEventListener("mousedown", function (event) {
        event.preventDefault();
        originalWidth = parseFloat(getComputedStyle(ref, null).getPropertyValue('width').replace('px', ''));
        originalWidthDots = parseFloat(getComputedStyle(refWithDots, null).getPropertyValue('width').replace('px', ''));
        originalHeight = parseFloat(getComputedStyle(ref, null).getPropertyValue('height').replace('px', ''));
        originalHeightDots = parseFloat(getComputedStyle(refWithDots, null).getPropertyValue('height').replace('px', ''));
        originalX = ref.getBoundingClientRect().left;
        originalXDots = refWithDots.getBoundingClientRect().left;
        originalY = ref.getBoundingClientRect().top;
        originalYDots = refWithDots.getBoundingClientRect().top;
        originalMouseX = event.pageX;
        originalMouseY = event.pageY;
        window.addEventListener('mousemove', resizeBottomRight);
        window.addEventListener('mouseup', function () { return window.removeEventListener("mousemove", resizeBottomRight); });
    });
    function resizeTopLeft(e) {
        var width = originalWidth - (e.pageX - originalMouseX);
        var height = originalHeight - (e.pageY - originalMouseY);
        var widthDots = originalWidthDots - (e.pageX - originalMouseX);
        var heightDots = originalHeightDots - (e.pageY - originalMouseY);
        if (width > 300) {
            ref.style.width = width + 'px';
            ref.style.left = originalX + (e.pageX - originalMouseX) + 'px';
            refWithDots.style.width = widthDots + 'px';
        }
        if (height > 150) {
            ref.style.height = height + 'px';
            ref.style.top = originalY + (e.pageY - originalMouseY) + 'px';
            refWithDots.style.height = heightDots + 'px';
        }
    }
    function resizeTopRight(e) {
        var width = originalWidth + (e.pageX - originalMouseX);
        var height = originalHeight - (e.pageY - originalMouseY);
        var widthDots = originalWidthDots + (e.pageX - originalMouseX);
        var heightDots = originalHeightDots - (e.pageY - originalMouseY);
        if (width > 300) {
            ref.style.width = width + 'px';
            refWithDots.style.width = widthDots + 'px';
        }
        if (height > 150) {
            ref.style.height = height + 'px';
            refWithDots.style.height = heightDots + 'px';
            ref.style.top = originalY + (e.pageY - originalMouseY) + 'px';
        }
    }
    function resizeBottomLeft(e) {
        var height = originalHeight + (e.pageY - originalMouseY);
        var width = originalWidth - (e.pageX - originalMouseX);
        var widthDots = originalWidthDots - (e.pageX - originalMouseX);
        var heightDots = originalHeightDots + (e.pageY - originalMouseY);
        if (height > 150) {
            ref.style.height = height + 'px';
            refWithDots.style.height = heightDots + "px";
        }
        if (width > 300) {
            ref.style.width = width + 'px';
            refWithDots.style.width = widthDots + 'px';
            ref.style.left = originalX + (e.pageX - originalMouseX) + 'px';
        }
    }
    function resizeBottomRight(e) {
        var width = originalWidth + (e.pageX - originalMouseX);
        var height = originalHeight + (e.pageY - originalMouseY);
        var widthDots = originalWidthDots + (e.pageX - originalMouseX);
        var heightDots = originalHeightDots + (e.pageY - originalMouseY);
        if (width > 300) {
            ref.style.width = width + 'px';
            refWithDots.style.width = widthDots + 'px';
        }
        if (height > 150) {
            ref.style.height = height + 'px';
            refWithDots.style.height = heightDots + 'px';
        }
    }
}
exports.default = {
    makeDraggable: makeDraggable,
    makeResizable: makeResizable
};
