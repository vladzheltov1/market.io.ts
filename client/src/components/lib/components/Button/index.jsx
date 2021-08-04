import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "rsuite";
import "./style.scss";

export const Button = ({
    onClick = () => null,
    disabled = false,
    link,
    color = "blue",
    children,
    icon,
    primary = false,
    secondary = false
}) => {

    const btnClasses = [
        "button",
        color,
        primary ? "primary" : "",
        secondary ? "secondary" : ""
    ]

    if (link) {
        return (
            <Link
                to={link}
                onClick={() => onClick()}
                disabled={disabled}
                className={btnClasses.join(" ")}
            >
                {icon && (
                    <Icon icon={icon} />
                )}
                {children}
            </Link>
        )
    }

    return (
        <button
            onClick={() => onClick()}
            disabled={disabled}
            className={btnClasses.join(" ")}
        >
            {icon && (
                <Icon icon={icon} />
            )}
            {children}
        </button>
    )
}