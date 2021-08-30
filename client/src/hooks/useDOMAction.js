import { useEffect, useRef, useState } from "react";

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
 * A hook used to get current state of the DOM node (normal, hovered, active, focused)
 * @returns nodeRef (attechment to the component) and nodeState (current state of the component)
 * @todo Get this work properly. When an input is focused or active, we don't need to set the state to normal.  
*/
export const useDOMAction = () => {
    const [nodeState, setNodeState] = useState(DOMStates.normal);

    const nodeRef = useRef();

    useEffect(() => {
        const node = nodeRef.current;

        if (!node) {
            throw new Error("A reference to the node required! Try ref={nodeRef} to attach this hook to the node!");
        }

        // Hover state
        node.addEventListener("mouseover", () => setNodeState(DOMStates.hovered));
        node.addEventListener("mouseout", () => {
            console.log(`Nodestate is ${nodeState} so now we check`);
            if(nodeState === DOMStates.active) return;
            console.log("We're still here");
            setNodeState(DOMStates.normal)
        });

        // Focus state
        node.addEventListener("focus", () => setNodeState(DOMStates.focused));
        node.addEventListener("blur", () => setNodeState(DOMStates.normal));

        // Active state
        node.addEventListener("click", () => setNodeState(DOMStates.active));
        // node.addEventListener("mouseup", () => setNodeState(DOMStates.normal));

        // eslint-disable-next-line
    }, []);

    return { nodeRef, nodeState };
}