import React from "react";
import { Icon } from "rsuite";
import {useDOMAction} from "../../../../hooks/useDOMAction";
// import "./style.scss";
import {getStyle} from "./style";

export const Input = ({
    type = "text",

    // Input status (default/info/success/warning/danger)
    status = "default",

    placeholder = "",
    onChange = () => void 0,
    icon = null,
    value = "",
    width = "100%",
    label = ""
}) => {
    const {nodeRef, nodeState} = useDOMAction();

    const componentStyle = getStyle({
        state: nodeState,
        status: status
    });

    console.log({nodeState});

    return (
        <div className="input-wrapper" style={componentStyle.wrapper}>
            {icon && (
                <Icon icon={icon} className="input-icon" />
            )}
            {label && (
                <label style={componentStyle.label}>
                    {label}
                </label>
            )}
            <input
                ref={nodeRef}
                type={type}
                value={value}
                placeholder={placeholder} 
                style={componentStyle.input}
                onChange={event => onChange(event)}
            />
        </div>
    )
}