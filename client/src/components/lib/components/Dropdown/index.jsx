import React, {useState} from "react";
import {Text} from "../../../lib/";
import { Link } from "react-router-dom";
import "./style.scss";
import {Icon} from "rsuite";

export const Dropdown = ({children, title = "", icon}) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="dropdown">
            <div onClick={() => setOpen(!open)} className="dropdown__title">
                {icon && <Icon icon={icon}/>}
                <Text>{title}</Text>
                {open ? (
                    <Icon icon="angle-up"/>
                ) : (
                    <Icon icon="angle-down"/>
                )}
            </div>

            {open && (
                <div className="dropdown__wrapper">
                    {children}
                </div>
            )}
        </div>
    )
}

export const DropdownItem = ({
    divider = false,
    children,
    icon,
    link
}) => {
    if(divider){
        return (
            <hr className="dropdown__divider"/>
        )
    }
    if(link){
        return (
            <Link to={link} className="dropdown__item">
                {icon && <Icon icon={icon} />}
                {children}
            </Link>
        )
    }
    return (
        <div className="dropdown__item">
            {icon && <Icon icon={icon} />}
            {children}
        </div>
    )
}