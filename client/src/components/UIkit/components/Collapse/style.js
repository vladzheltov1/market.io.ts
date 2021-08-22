import {UItoken} from "../../../UIkit/token";

export const style = {
    collapse: {
        display: "flex",
        flexDirection: "column",

    },
    collapse__title: {
        display: "flex",
        alignItems: "center",
        color: UItoken.colorBlack_dark,
        gap: 5,
        padding: 10
    },
    collapse__listClosed: {
        height: 0,
        overflow: "hidden",
        transitionDuration: "300ms"
    },
    collapse__listOpen: {
        height: "max-content",
        padding: 10,
        border: "1px solid " + UItoken.colorGray_dark,
        borderRadius: UItoken.borderRadiusMain
    }
}