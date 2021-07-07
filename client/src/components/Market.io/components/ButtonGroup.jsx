import React from "react";

export const ButtonGroup = (
    {
        children,
        align = "center",
        justify = "center",
        gap = 5,
        direction = "row"
    }) => {

    // Justify will always work with X
    // Align will always work with Y
    const style = {
        width: "100%",
        display: "flex",
        gap: gap,
        flexDirection: direction,
        alignItems: direction === "row"
            ? align === "center" ? align : "flex-" + align
            : justify === "center" ? justify : "flex-" + justify,
        justifyContent: direction === "row"
            ? justify === "center" ? justify : "flex-" + justify
            : align === "center" ? align : "flex-" + align,
    }

    return (
        <div style={style}>
            {children}
        </div>
    )
}