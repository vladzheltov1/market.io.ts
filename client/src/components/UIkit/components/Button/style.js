import { mainColors, priorityColors } from "../../../../helpers/color";
import { DOMStates } from "../../../../hooks/useDOMAction";
import { UItoken } from "../../token";

const style = {
    button: {
        borderRadius: UItoken.borderRadiusMain,
        transitionDuration: "0.2s",
        color: UItoken.colorWhite,
        textDecoration: "none",
        textAlign: "center",
        padding: "8px 20px",
        display: "block",
        fontSize: 16,
    }
}

export const getStyle = ({
    state,
    color,
    primary = false,
    secondary = false,
    disabled = false
}) => {
    const componentStyle = {
        ...style.button,
        opacity: disabled ? 0.85 : 1
    };

    const componentState = state === DOMStates.normal ? DOMStates.normal : DOMStates.active;

    if (primary) componentStyle.backgroundColor = priorityColors.primary[componentState];
    else if (secondary) componentStyle.backgroundColor = priorityColors.secondary[componentState];
    else {
        componentStyle.backgroundColor = mainColors[color][componentState];
    }

    return componentStyle;
}