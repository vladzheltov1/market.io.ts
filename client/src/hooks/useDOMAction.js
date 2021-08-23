import { useState, useEffect } from "react"

/**
 * Any possible states of the node
 */
export const DOMStates = {
    normal: "normal",
    hovered: "hovered",
    active: "active",
    focused: "focused"
}

/**
 * A hook used to get current state of the DOM node
 */
export const useDOMAction = (ref) => {
    const [nodeState, setNodeState] = useState(DOMStates.normal);

    useEffect(() => {
        const node = ref.current;

        if(!node) {
            throw new Error("A reference to the node required! Try useRef() to attach this hook to the node!");
        }

        // Hover state
        node.addEventListener("mouseover", () => setNodeState(DOMStates.hovered));
        node.addEventListener("mouseout", () => setNodeState(DOMStates.normal));

        // Focus state
        node.addEventListener("focus", () => setNodeState(DOMStates.focused));
        node.addEventListener("blur", () => setNodeState(DOMStates.normal));
        
        // Active state
        node.addEventListener("mousedown", () => setNodeState(DOMStates.active));
        node.addEventListener("mouseup", () => setNodeState(DOMStates.normal));
    }, []); 

    return {nodeState};
}