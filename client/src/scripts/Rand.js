/**
 * @returns Random int num: min <= num <= max
 */
export const randInt = ({ min = 0, max }) => {
    if (!max) throw new Error("No max value found!");

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}