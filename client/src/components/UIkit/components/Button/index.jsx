import React, {useRef} from "react";
import { Link } from "react-router-dom";
import { Icon } from "rsuite";
import { style } from "./style";
import { mainColors, priorityColors } from "../../../../helpers/color";
import {useDOMAction, DOMStates} from "../../../../hooks/useDOMAction";

export const Button = ({
    // Function to be called on click
    onClick = () => null,
    
    // The content inside the button
    children,

    // Enable/disable the button
    disabled = false,

    // Set the background color
    color = "blue",

    // Set the icon of the button
    icon,

    // If this param is given, the component looks like a button,
    // but it works as a link (this param must contain a reference like "/home")
    link,

    // Set the button primary and secondary colors
    primary = false,
    secondary = false
}) => {
    const btnRef = useRef();
    const {nodeState} = useDOMAction(btnRef);

    // const btnClasses = [
    //     "button",
    //     (color && !primary && !secondary) ? color : "",
    //     primary ? "primary" : "",
    //     secondary ? "secondary" : ""
    // ]

    
    const buttonState = nodeState === DOMStates.normal ? DOMStates.normal : "active";

    if(disabled){
        style.button.opacity = "0.85"
    }
    
    if(primary){
        style.button.backgroundColor = priorityColors.primary[buttonState];
    }
    else if(secondary){
        style.button.backgroundColor = priorityColors.secondary[buttonState];
    }
    else {
        style.button.backgroundColor = mainColors[color][buttonState];
    }
    
    const buttonStyle = {
        ...style.button
    }

    // if(color && mainColors[color]){
    //     buttonStyle.backgroundColor = mainColors[color][]
    // }

    if (link) {
        return (
            <Link
                to={link}
                onClick={() => onClick()}
                disabled={disabled}
                // className={btnClasses.join(" ")}
                style={buttonStyle}
                ref={btnRef}
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
            // className={btnClasses.join(" ")}
            ref={btnRef}
            style={buttonStyle}
        >
            {icon && (
                <Icon icon={icon} />
            )}
            {children}
        </button>
    )
}