import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "rsuite";

export const Button = ({ children, link, color, view, onClick, icon, disabled }) => {

    const classList = ['m-btn'];

    if (view) classList.push(view);
    else if (color) classList.push(color);
    else classList.push("primary")

    if (link) {
        return (
            <Link to={link} className={classList.join(' ')}>
                {icon && <Icon icon={icon} />}
                {children || ""}
            </Link>
        )
    }
    return (
        <button onClick={() => onClick()} disabled={disabled} className={classList.join(' ')}>
            {icon && <Icon icon={icon} />}
            {children || ""}
        </button>
    )
}