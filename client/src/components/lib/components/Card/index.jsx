import React from "react";

export const Card = ({
    children,
    bgColor,
    className
}) => {

    const style = {
        display: "flex",
        background: bgColor || "#f3f3f3",
        padding: 15,
        borderRadius: 25
    }

    return (
        <div style={style} className={className || ""}>
            {children}
        </div>
    )
}