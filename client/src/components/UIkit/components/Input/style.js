import {UItoken} from "../../token";
import {DOMStates} from "../../../../hooks/useDOMAction";

const statusProps = {
    default: UItoken.colorGray_dark,
    info: UItoken.colorBlueNormal,
    success: UItoken.colorGreenNormal,
    warning: UItoken.colorYellowNormal,
    danger: UItoken.colorRedNormal
}

const style = {
    input: {
        outline: "none",
        padding: "10px 15px",
        display: "block",
        width: "100%",
        minWidth: "100%",
        maxWidth: "100%",
        fontSize: UItoken.text_sizeNormal,
        transitionDuration: "0.2s",
        transition: "box-shadow 0.2s ease-out",
        border: `2px solid ${statusProps.default}`,
        borderRadius: UItoken.borderRadiusMain,
    },
    inputActive: {
        borderColor: UItoken.colorPrimaryNormal,
        boxShadow: `0 0 4px 1px ${UItoken.colorPrimaryNormal}`
    },
    inputWithIcon: {
        paddingLeft: 30
    },
    label: {
        position: "absolute",
        textAlign: "center",
        top: "-20%",
        left: "10px",
        padding: "0 3px",
        backgroundColor: UItoken.colorWhite,
        fontSize: UItoken.text_sizeSmall,
        color: UItoken.colorGray_dark
    }
}

export const getStyle = ({
    status,
    icon,
    state
}) => {
    const componentStyle = {
        wrapper: {
            display: "block",
            position: "relative"
        },  
        input: {
            ...style.input,
            ...(icon ? style.inputWithIcon : null),
            borderColor: statusProps[status],
            ...(state !== DOMStates.normal ? style.inputActive : null)
        },
        label: style.label
    }

    return componentStyle;
}