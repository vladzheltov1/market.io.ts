import React from "react";

export const Image = ({
    src = "",
    fit = "cover",
    alt = "",
    maxWidth = "100%",
    maxHeight,
    minWidth,
    minHeight,
    width,
    height,
}) => {

    const style = {
        wrapper: {
            display: "block",
            position: "relative",
            maxWidth: maxWidth,
            height: "auto"
        },
        image: {
            display: "block",
            width: "100%",
            objectFit: fit
        }
    }

    if (width) style.image.width = width;
    if (height) style.image.height = height;
    if (maxHeight) style.wrapper.maxHeight = maxHeight;
    if (minWidth) style.wrapper.maxWidth = minWidth;
    if (minHeight) style.wrapper.minHeight = minHeight;

    return (
        <div style={style.wrapper}>
            <img src={src} alt={alt} style={style.image} />
        </div>
    )
}