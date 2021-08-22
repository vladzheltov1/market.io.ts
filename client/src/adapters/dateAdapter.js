export const dateAdapter = {
    convertToClient(date) {
        return date
            .split("T")[0]
            .split("-")
            .reverse()
            .join(".");
    }
} 