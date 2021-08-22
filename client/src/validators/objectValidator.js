export const objectValidator = {
    isObjectEmpty(object) {
        for (let key in object) {
            if (object.hasOwnProperty(key)) return false;
        }
        return true;
    }
}