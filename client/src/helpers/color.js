import { randInt } from "../scripts/Rand";

const solidColors = ["#f1f7fc", "#f9f4f4", "#f6f6f6", "#fcf4f0", "#EBEAFB", "#F9F5EB"];

const colorMatcher = {
    "solid": solidColors
}

export const getRandomColor = (type) => {
    return colorMatcher[type][randInt({ max: colorMatcher[type].length - 1 })] || null;
}