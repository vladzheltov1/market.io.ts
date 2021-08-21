import React from "react";
import { Link } from "react-router-dom";
import { getRandomColor } from "../../../../scripts/Colorizer";
import "./style.scss";

export const Card = ({
    background,
    padding = 15,
    children,
    vertical = true,
    link,
    width,
    height,
    maxWidth = "100%",
    maxHeight,
    minWidth,
    minHeight
}) => {

    const style = {
        card: {
            display: "flex",
            flexDirection: vertical ? "column" : "row",
            background: background ? background : getRandomColor(),
            padding: padding,
            maxWidth: maxWidth
        }
    }

    if (width) style.card.width = width;
    if (height) style.card.height = height;
    if (maxHeight) style.card.maxHeight = maxHeight;
    if (minWidth) style.card.minWidth = minWidth;
    if (minHeight) style.card.minHeight = minHeight;

    if (link) {
        return (
            <Link to={link} className="card" style={style.card}>
                {children}
            </Link>
        )
    }

    return (
        <div className="card" style={style.card}>
            {children}
        </div>
    )
}