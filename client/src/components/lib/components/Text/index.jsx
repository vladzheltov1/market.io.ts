import React from "react";
import { Icon } from "rsuite";
import "./style.scss";

const validMode = [
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
    children,
    mode = "span",
    bold = false,
    italic = false,
    muted = false,
    icon
}) => {
    /**
     * Mode validation
     */
    if (!validMode.includes(mode)) mode = "span";

    const classList = [
        bold ? "text-bold" : "",
        italic ? "text-italic" : "",
        muted ? "text-muted" : ""
    ]

    const elementProperties = {
        className: classList.join(" ")
    }

    let elementChildren = [children];

    if (icon) elementChildren = [<Icon icon={icon} />, children];

    return React.createElement(mode, elementProperties, elementChildren);
}