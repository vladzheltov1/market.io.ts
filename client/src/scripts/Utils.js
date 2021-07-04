class Utils {
    isObjectEmpty(object) {
        for (let key in object) {
            if (object.hasOwnProperty(key)) return false;
        }
        return true;
    }
    dateAdaper(date) {
        return date
            .split("T")[0]
            .split("-")
            .reverse()
            .join(".");
    }
}

export const utils = new Utils();