export const utils = {
    json: (json) => {
        return(JSON.parse(JSON.stringify(json)))
    }
}

// Checking if an object is empty
export const isEmpty = (obj) => {
    for(let key in obj){
        if(obj.hasOwnProperty(key)) return false;
    }
    return true;
}