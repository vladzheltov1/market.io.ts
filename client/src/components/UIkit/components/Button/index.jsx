import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "rsuite";
import { useDOMAction } from "../../../../hooks/useDOMAction";
import { getStyle } from "./style";

export const Button = ({
    // Function called on click
    onClick = () => null,

    // The content inside the button
    children = "",

    // Enable/disable the button
    disabled = false,

    // Set the background color
    color = "blue",

    // Set the icon of the button
    icon,

    // If this param is given, the component looks like a button,
    // but it works as a link (this param must contain a reference like "/home")
    link,

    // Set the button primary and secondary colors
    primary = false,
    secondary = false
}) => {
    const { nodeRef, nodeState } = useDOMAction();

    const buttonStyle = getStyle({
        state: nodeState,
        secondary,
        disabled,
        primary,
        color,
    });

    const type = link ? Link : "button";

    const componentProps = {
        onClick: () => onClick(),
        disabled: disabled,
        style: buttonStyle,
        ref: nodeRef,
        to: link ?? null,
    }

    return React.createElement(type, componentProps,
        icon && <Icon icon={icon} />,
        children
    );
}