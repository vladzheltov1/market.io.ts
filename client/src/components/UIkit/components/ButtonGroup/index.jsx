import React from "react";

export const ButtonGroup = ({
    horizontal = "flex-start",
    vertical = "flex-start",
    direction = "row",
    children,
    gap = 5
}) => {

    // Justify will always work with X
    // Align will always work with Y

    if (direction === "column") {
        const tmp = horizontal;
        horizontal = vertical;
        vertical = tmp;
    }

    const style = {
        width: "100%",
        display: "flex",
        gap: gap,
        flexDirection: direction,
        justifyContent: horizontal,
        alignItems: vertical
    }

    return React.createElement("div", {style}, children);
}