import {UItoken} from "../components/UIkit/token";
import {Random} from "../scripts/rand";

const colors = {
    priority: {
        primary: {
            normal: UItoken.colorPrimaryNormal,
            active: UItoken.colorPrimaryActive 
        },
        secondary: {
            normal: UItoken.colorSecondaryNormal,
            active: UItoken.colorSecondaryActive
        }
    },
    main: {
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
    },
    solidBackground: [
        "#f1f7fc", "#f9f4f4", "#f6f6f6", "#fcf4f0", "#EBEAFB", "#F9F5EB"
    ],
    gradient: [
        "linear-gradient(135deg, rgba(246, 120, 29, 0.8) 0%, rgba(255, 208, 76, 0.8) 69%)",
        "linear-gradient(135deg, rgba(248, 108, 175, 1) 0%, rgba(123, 102, 251, 1) 69%)",
        "linear-gradient(135deg, rgba(110, 222, 245, 1) 0%, rgba(101, 89, 241, 1) 69%)"
    ]
}

export const getGradient = (number) => {
    return colors.gradient[number - 1] || colors.gradient[0];
}

export const getRandomSolid = () => {
    return colors.solidBackground[Random.randInt({max: colors.solidBackground.length - 1})];
}

export const getColor = (type) => {
    return colors[type];
}