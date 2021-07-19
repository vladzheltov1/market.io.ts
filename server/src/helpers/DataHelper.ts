const isStringValid = (string: string): boolean => {
    if (!string || string.trim().length === 0) {
        return false;
    }
    return true;
}

const isStringInArrayValid = (array: Array<string>): boolean => {
    for (let item in array) {
        if (!isStringValid(item)) {
            return false;
        }
        return true;
    }
}

const isArrayEmpty = (array: Array<any>): boolean => {
    return array.length === 0;
}

const isObjectEmpty = (object): boolean => {
    for (let key in object) {
        if (object.hasOwnProperty(key)) return false;
    }
    return true;
}

const getValidString = (string: string) => {
    return string.trim();
}

export {
    isStringInArrayValid,
    isArrayEmpty,
    isObjectEmpty,
    isStringValid
};

