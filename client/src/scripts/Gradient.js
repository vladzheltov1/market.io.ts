const gradientList = [
    "linear-gradient(135deg, rgba(246, 120, 29, 0.8) 0%, rgba(255, 208, 76, 0.8) 69%)",
    "linear-gradient(135deg, rgba(248, 108, 175, 1) 0%, rgba(123, 102, 251, 1) 69%)",
    "linear-gradient(135deg, rgba(110, 222, 245, 1) 0%, rgba(101, 89, 241, 1) 69%)"
]

export const setGradient = (num) => {
    return gradientList[num - 1] || gradientList[0]
}