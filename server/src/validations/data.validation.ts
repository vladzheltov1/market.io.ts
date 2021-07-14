const isStringValid = (str: string): boolean => {
    return !!str && str.trim().length !== 0;
}

const arrayHasEmptyFields = (arr: Array<any>) => {
    if (arr.length === 0) throw new Error("Empty array given");
    for (let item in arr) {
        if (!item) return true;
    }
    return false;
}


export {
    isStringValid,
    arrayHasEmptyFields
};

