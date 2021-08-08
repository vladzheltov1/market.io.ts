import React from "react";
import { Icon } from "rsuite";
import "./style.scss";

export const ErrorBlock = ({ message = "", close }) => {
    return (
        <div className="error-block">
            <div>
                <b> Ошибка: </b> {message}
            </div>
            <span className="error-block-close">
                <Icon icon="close-circle" onClick={typeof close === "function" && (() => close())} />
            </span>
        </div>
    )
}