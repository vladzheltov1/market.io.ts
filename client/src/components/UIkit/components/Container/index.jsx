import React from "react";
import { style } from "./style";

export const Container = ({
    children
}) => {
    const componentStyle = children.length > 1 ? style.container__moreChildren : style.container__singleChild;

    const componentProps = {
        style: componentStyle
    }

    return React.createElement("div", componentProps, children);
}