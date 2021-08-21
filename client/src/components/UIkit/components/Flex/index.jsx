import React from "react";

export const Flex = ({
    children,
    direction = "row",
    align = "flex-start",
    justify = "flex-start",
    gap = 0
}) => {

    const style = {
        position: "relative",
        display: "flex",
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
        gap: gap
    }

    return (
        <div style={style}>
            {children}
        </div>
    )
}