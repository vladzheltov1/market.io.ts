import { UItoken } from "../../token";

export const getStyle = ({
    color, textAlign, size, bold, italic, muted
}) => {
    const componentStyle = {
        color: color ?? UItoken.colorBlack_dark,
        fontSize: size ?? null,
        textAlign: textAlign,
        fontWeight: bold ? "600" : null,
        fontStyle: italic ? "italic" : null,
        opacity: muted ? 0.8 : 1
    };

    return componentStyle;
}