// export const utils = {
//     json: (json) => {
//         return(JSON.parse(JSON.stringify(json)))
//     }
// }

// Checking if an object is empty
// export const isEmpty = (element) => {
//     if(typeof element === 'object'){
//         for(let key in element){
//             if(element.hasOwnProperty(key)) return false;
//         }
//         return true;
//     }
//     else{
//         return !!element;
//     }
// }

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

    // DO I NEED IT? (no modules use it...)

    // /**
    //  * This function will transform 
    //  * @param  {object} json
    //  */
    // public json(json: object){
    //     return(JSON.parse(JSON.stringify(json)))
    // }
}

export const utils = new Utils();
