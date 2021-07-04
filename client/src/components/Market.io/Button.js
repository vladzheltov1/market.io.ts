import React from "react";
import { Link } from "react-router-dom";

export const Button = ({ children, link, color, view, action, icon }) => {

    const classList = ['m-btn'];

    if (view) classList.push(view);
    else if (color) classList.push(color);
    else classList.push("primary")

    if (link) {
        return (
            <Link to={link} className={classList.join(' ')}>
                {children || ""}
            </Link>
        )
    }
    return (
        <button onClick={action && (() => action())} className={classList.join(' ')}>
            {children || ""}
        </button>
    )
}