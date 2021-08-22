import React, { useState } from "react";
import { Text } from "../../../UIkit";
import { style } from "./style";
import { Icon } from "rsuite";

export const Collapse = ({
    title,
    children
}) => {

    const [open, setOpen] = useState(false);

    return (
        <div style={style.collapse}>
            <div style={style.collapse__title} onClick={() => setOpen(!open)}>
                <Text>{title}</Text>
                <Icon icon={open ? "angle-up" : "angle-down"} size="lg" />
            </div>
            <div style={open ? style.collapse__listOpen : style.collapse__listClosed}>
                {children}
            </div>
        </div>
    )
}