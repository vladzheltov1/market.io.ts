/* Colors to choose as a background */
const colors = ["#f1f7fc", "#f9f4f4", "#f6f6f6", "#fcf4f0", "#EBEAFB", "#F7D9CF"];
/* Select random color */
export const getRandomColor = () => colors[Math.floor(Math.random() * colors.length - 1)];
