const isIdValid = (id: string) => {
    if (id.trim().length !== 24) {
        return false;
    }
    return true;
}

export {
    isIdValid
};
