import React from "react";

export const Flex = ({
    children,
    direction = "row",
    align = "flex-start",
    justify = "flex-start"
}) => {

    const style = {
        display: "flex",
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify
    }

    return (
        <div style={style}>
            {children}
        </div>
    )
}