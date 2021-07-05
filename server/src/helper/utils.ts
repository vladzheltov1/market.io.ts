class Utils{
    /**
     * This method will check if the given `object` is empty.
     * If it is, return `true`, else - return `false`
     * @param {object} obj 
     * @returns {boolean} true/false
     */
    public isObjectEmpty(obj: object){
        for(let key in obj){
            if(obj.hasOwnProperty(key)) return false;
        }
        return true;
    }

    /**
     * This method will check if the given `array` is empty.
     * If it is, return `true`, else - return `false`
     * @param {array} array
     * @returns {boolean} true/false
     */
    public isArrayEmpty(array: Array<any>){
        return array.length === 0 ? true : false;
    }

    /**
     * This method will check if the given paramert is NOT `undefined`
     * and it's trimmed length is NOT equal to 0. In this case we'll get `true`. 
     * @param {string} str 
     * @returns {boolean} true/false
     */
    public isStringValid(str: string): boolean{
        return (str !== undefined && str.trim().length !== 0);
    }
}

export const utils = new Utils();
