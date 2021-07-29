import React from "react";
import { Icon } from "rsuite";

export const Rate = () => {
    return (
        <div style={{ display: "flex", gap: 5 }}>
            <div className="rate-stars">
                <Icon icon="star" />
                <Icon icon="star" />
                <Icon icon="star" />
                <Icon icon="star" />
                <Icon icon="star" />
            </div>
            5.0
        </div>
    )
}