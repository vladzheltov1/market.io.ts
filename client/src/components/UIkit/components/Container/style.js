import { UItoken } from "../../token";

const container__general = {
    padding: "10px 15px"
}

export const style = {
    container__singleChild: {
        ...container__general,
        display: "block",
        maxWidth: UItoken.containerMax_width,
        margin: "0 auto"
    },
    container__moreChildren: {
        ...container__general,
        display: "grid",
        gridTemplateColumns: `auto 1170px auto`
    }
}