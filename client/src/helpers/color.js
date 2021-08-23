import { randInt } from "../scripts/Rand";
import { UItoken } from "../components/UIkit/token";

const solidColors = ["#f1f7fc", "#f9f4f4", "#f6f6f6", "#fcf4f0", "#EBEAFB", "#F9F5EB"];
export const priorityColors = {
    primary: {
        normal: UItoken.colorPrimaryNormal,
        active: UItoken.colorPrimaryActive 
    },
    secondary: {
        normal: UItoken.colorSecondaryNormal,
        active: UItoken.colorSecondaryActive
    }
}
export const mainColors = {
    red: {
        normal: UItoken.colorRedNormal,
        active: UItoken.colorRedActive
    },
    orange: {
        normal: UItoken.colorOrangeNormal,
        active: UItoken.colorOrangeActive
    },
    yellow: {
        normal: UItoken.colorYellowNormal,
        active: UItoken.colorYellowActive
    },
    green: {
        normal: UItoken.colorGreenNormal,
        active: UItoken.colorGreenActive
    },
    blue: {
        normal: UItoken.colorBlueNormal,
        active: UItoken.colorBlueActive
    },
    violet: {
        normal: UItoken.colorVioletNormal,
        active: UItoken.colorVioletActive
    }
}

const colorMatcher = {
    "solid": solidColors,
    "main": mainColors,
    "priority": priorityColors
}

export const getRandomColor = (type) => {
    return colorMatcher[type][randInt({ max: colorMatcher[type].length - 1 })] || null;
}