import React from "react";
import { style } from "./style";

export const Container = ({
    children
}) => {

    const componentStyle = children.length > 1 ? style.container__moreChildren : style.container__singleChild;

    return (
        <div style={componentStyle}>
            {children}
        </div>
    )
}