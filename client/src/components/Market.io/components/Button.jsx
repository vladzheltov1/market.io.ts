import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "rsuite";

/**
 * @deprecated 
 * @see "/components/lib" instead
 */

export const Button = ({ children, link, color, view, onClick, icon, disabled, className = {} }) => {

    const classList = ['m-btn'];

    if (view) classList.push(view);
    else if (color) classList.push(color);
    else classList.push("primary");

    if (className) classList.push(className);

    if (link) {
        return (
            <Link to={link} className={classList.join(' ')}>
                {icon && <Icon icon={icon} />}
                {children || ""}
            </Link>
        )
    }
    return (
        <button onClick={typeof onClick === "function" && (() => onClick())} disabled={disabled} className={classList.join(' ')}>
            {icon && <Icon icon={icon} />}
            {children || ""}
        </button>
    )
}