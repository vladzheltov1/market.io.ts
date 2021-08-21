import React from "react";
import { Icon } from "rsuite";
import "./style.scss";

export const Input = ({
    type = "text",
    status = "default",
    placeholder = "",
    onChange,
    icon = null,
    value = "",
    width = "100%",
    label = "" }) => {

    const classList = [
        "input",
        icon ? "with-icon" : "",
        status
    ];

    const style = {
        width
    }

    return (
        <div className="input-wrapper" style={style}>
            {icon && (
                <Icon icon={icon} className="input-icon" />
            )}
            {label && (
                <label className="input-label">
                    {label}
                </label>
            )}
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                className={classList.join(" ")}
                onChange={typeof onChange === "function" && ((event) => onChange(event))}
            />
        </div>
    )
}