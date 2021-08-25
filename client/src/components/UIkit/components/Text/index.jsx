import React from "react";
import { Icon } from "rsuite";
import { getStyle } from "./style";

const validModes = [
    "span",
    "div",
    "p",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6"
]

export const Text = ({
    textAlign = "start",
    color,
    children,
    mode = "span",
    size,
    bold = false,
    italic = false,
    muted = false,
    icon
}) => {
    /**
     * Mode validation
     */
    if (!validModes.includes(mode)) {
        mode = "span";
    }

    const componentStyle = getStyle({
        color, textAlign, size, bold, italic, muted
    });

    const componentProps = {
        style: componentStyle
    }

    return React.createElement(mode, componentProps,
        icon && <Icon icon={icon} />,
        children
    );
}