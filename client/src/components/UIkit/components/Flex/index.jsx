import React from "react";

export const Flex = ({
    children,
    direction = "row",
    align = "flex-start",
    justify = "flex-start",
    gap = 0
}) => {
    const componentStyle = {
        position: "relative",
        display: "flex",
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
        gap: gap
    }

    const componentProps = {
        style: componentStyle
    }

    return React.createElement("div", componentProps, children);
}