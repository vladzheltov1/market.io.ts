class Utils{
    /**
     * Check if an object is empty.
     * It will return boolean with the value, based 
     * on the object keys.
     * @param {object} obj 
     * @returns {boolean}
     */
    public isObjectEmpty(obj: object){
        for(let key in obj){
            if(obj.hasOwnProperty(key)) return false;
        }
        return true;
    }

    /**
     * Same as the above function, but this one works with arrays.
     * @param {array} array
     * @returns {boolean}
     */
    public isArrayEmpty(array: Array<any>){
        return array.length === 0 ? true : false;
    }
}

export const utils = new Utils();
