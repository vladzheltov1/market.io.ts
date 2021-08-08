import React from "react";

export const Grid = ({
    children,
    templateColumn,
    templateRow
}) => {
    const style = {
        display: "grid",
        gridTemplateColumns: templateColumn || "",
        gridTemplateRows: templateRow || ""
    }

    return (
        <div style={style}>
            {children}
        </div>
    )
}