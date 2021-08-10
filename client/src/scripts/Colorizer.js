import { randInt } from "./Rand";

/** Colors to choose as a background */
const colors = ["#f1f7fc", "#f9f4f4", "#f6f6f6", "#fcf4f0", "#EBEAFB", "#F9F5EB"];
/** Select random color */
export const getRandomColor = () => colors[randInt({ max: colors.length - 1 })];
