 function makeDraggable(el: HTMLElement, handleDragStart: (event: Event) => void, handleDragEnd: (event: Event) => void){
    
    function addDraggable(el: HTMLElement){
    
        el.draggable = true;
        el.style.position = "absolute";
        el.style.cursor = "grab";
    
        el?.addEventListener("mousedown", () => {
            if(el) el.style.cursor = "grabbing";
        });
    
        el?.addEventListener("mouseup", () => {
            if(el) el.style.cursor = "grab";
        });
    }
    
    function addDragstart(el: HTMLElement){
        el.addEventListener("dragstart", handleDragStart, false);
    }
    
    function addDragend(el: HTMLElement){
        el.addEventListener('dragend', handleDragEnd, false);
    }
    
    addDraggable(el);
    addDragstart(el);
    addDragend(el);

}


 function makeResizable(ref:HTMLElement, placedRef:HTMLElement){

    const refWithDots = placedRef ? placedRef : ref;

    function addCss(divRefs:Array<HTMLElement>){

        for(let i = 0; i < divRefs.length; i ++){
            divRefs[i].style.width = "10px";
            divRefs[i].style.height = "10px";
            divRefs[i].style.position = "absolute";
        }


    }

    const topLeftResizer = document.createElement("div");
    const topRightResizer = document.createElement("div");
    const bottomLeftResizer = document.createElement("div");
    const bottomRightResizer = document.createElement("div");

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

    let originalWidth:number, originalHeight:number, originalX:number, originalY:number, originalMouseX:number, originalMouseY:number;
    let originalWidthDots:number, originalHeightDots:number, originalXDots:number, originalYDots:number;

    topLeftResizer.addEventListener("mousedown", (event) => {
        event.preventDefault()
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


        window.addEventListener('mousemove', resizeTopLeft)
        window.addEventListener('mouseup', ()=> window.removeEventListener("mousemove",resizeTopLeft))
    });

    topRightResizer.addEventListener("mousedown", (event) => {
        event.preventDefault()
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


        window.addEventListener('mousemove', resizeTopRight)
        window.addEventListener('mouseup', ()=> window.removeEventListener("mousemove",resizeTopRight))
    });
    bottomLeftResizer.addEventListener("mousedown", (event) => {
        event.preventDefault()
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


        window.addEventListener('mousemove', resizeBottomLeft)
        window.addEventListener('mouseup', ()=> window.removeEventListener("mousemove",resizeBottomLeft))
    });
    bottomRightResizer.addEventListener("mousedown", (event) => {
        event.preventDefault()
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


        window.addEventListener('mousemove', resizeBottomRight)
        window.addEventListener('mouseup', ()=> window.removeEventListener("mousemove",resizeBottomRight))
    });


    
    function resizeTopLeft(e:MouseEvent){
        const width = originalWidth - (e.pageX - originalMouseX)
        const height = originalHeight - (e.pageY - originalMouseY)
        const widthDots = originalWidthDots - (e.pageX - originalMouseX);
        const heightDots = originalHeightDots - (e.pageY - originalMouseY)
        if (width > 300) {
          ref.style.width = width + 'px'
          ref.style.left = originalX + (e.pageX - originalMouseX) + 'px';
          refWithDots.style.width = widthDots + 'px'
        }
        if (height > 150) {
          ref.style.height = height + 'px'
          ref.style.top = originalY + (e.pageY - originalMouseY) + 'px'
          refWithDots.style.height  = heightDots  + 'px'
        }
    }

    
    function resizeTopRight(e:MouseEvent){
        const width = originalWidth + (e.pageX - originalMouseX)
        const height = originalHeight - (e.pageY - originalMouseY)
        const widthDots = originalWidthDots + (e.pageX - originalMouseX);
        const heightDots = originalHeightDots - (e.pageY - originalMouseY)
        if (width > 300) {
            ref.style.width = width + 'px'
            refWithDots.style.width = widthDots + 'px'
        }
        if (height > 150) {
            ref.style.height = height + 'px'
            refWithDots.style.height = heightDots + 'px'
            ref.style.top = originalY + (e.pageY - originalMouseY) + 'px'
        }
    }

    
    function resizeBottomLeft(e:MouseEvent){
        const height = originalHeight + (e.pageY - originalMouseY);
        const width = originalWidth - (e.pageX - originalMouseX);
        const widthDots = originalWidthDots - (e.pageX - originalMouseX);
        const heightDots = originalHeightDots + (e.pageY - originalMouseY);
        if (height > 150) {
          ref.style.height = height + 'px'
          refWithDots.style.height = heightDots + "px";
        }
        if (width > 300) {
          ref.style.width = width + 'px'
          refWithDots.style.width = widthDots + 'px'
          ref.style.left = originalX + (e.pageX - originalMouseX) + 'px'
        }
    }

    function resizeBottomRight(e:MouseEvent){

        const width = originalWidth + (e.pageX - originalMouseX);
        const height = originalHeight + (e.pageY - originalMouseY)
        const widthDots = originalWidthDots + (e.pageX - originalMouseX);
        const heightDots = originalHeightDots + (e.pageY - originalMouseY);
        if (width > 300) {
          ref.style.width = width + 'px'
          refWithDots.style.width = widthDots + 'px'
        }
        if (height > 150) {
          ref.style.height = height + 'px'
          refWithDots.style.height = heightDots + 'px'
        }
    }

}

export default {
    makeDraggable,
    makeResizable
} 