import React from "react";

export const Grid = ({
    children,
    templateColumn,
    templateRow,
    gap = 0
}) => {
    const style = {
        display: "grid",
        gridTemplateColumns: templateColumn || null,
        gridTemplateRows: templateRow || null,
        gap: gap
    }

    return (
        <div style={style}>
            {children}
        </div>
    )
}