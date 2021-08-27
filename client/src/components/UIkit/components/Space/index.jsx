import React from "react";

export const Space = ({ height }) => {
    const style = {
        width: "100%",
        height: height
    }

    return React.createElement("div", {style}, null);
}