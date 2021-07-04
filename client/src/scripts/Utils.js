class Utils {
    isObjectEmpty(object) {
        for (let key in object) {
            if (object.hasOwnProperty(key)) return false;
        }
        return true;
    }
}

export const utils = new Utils();