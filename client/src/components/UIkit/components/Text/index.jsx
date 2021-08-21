import React from "react";
import { Icon } from "rsuite";
import "./style.scss";

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
    if (!validModes.includes(mode)) mode = "span";

    const classList = [
        bold ? "text-bold" : "",
        italic ? "text-italic" : "",
        muted ? "text-muted" : ""
    ]

    const elementProperties = {
        className: classList.join(" "),
        style: { fontSize: size, textAlign: textAlign }
    }

    let elementChildren = [children];

    if (color) elementProperties.style.color = color;
    if (icon) elementChildren = [<Icon icon={icon} />, children];

    return React.createElement(mode, elementProperties, elementChildren);
}