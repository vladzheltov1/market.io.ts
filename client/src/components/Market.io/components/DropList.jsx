import React, { useState } from "react";

export const DropList = (
    {
        onChange = function () { },
        placeholder = "",
        data = []
    }) => {

    const [visible, setVisible] = useState(false);

    const dropList = {
        position: "absolute",
        top: "100%",
        width: "100%",
        background: "#fff",
        display: visible ? "block" : "none",
        padding: "5px"
    }

    return (
        <div style={{ position: "relative" }}>
            <input
                onChange={typeof onChange === "function" ? (() => onChange()) : null}
                type="text"
                placeholder={placeholder}
            />
            <div style={dropList} className="shadow-1 border-radius-1">
                dfds
            </div>
        </div>
    )
}