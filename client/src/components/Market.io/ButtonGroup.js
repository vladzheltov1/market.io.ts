import React from "react";

export const ButtonGroup = ({ children, align = "center", justify = "center", gap = 5 }) => {

    const style = {
        width: "100%",
        display: "flex",
        gap: gap,
        alignItems: align === "center" ? align : "flex" + align,
        justifyContent: justify === "center" ? justify : "flex" + justify
    }

    return (
        <div style={style}>
            {children}
        </div>
    )
}