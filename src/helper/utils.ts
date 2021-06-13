export const utils = {
    json: (json) => {
        return(JSON.parse(JSON.stringify(json)))
    }
}

// Checking if an object is empty
export const isEmpty = (element) => {
    if(typeof element === 'object'){
        for(let key in element){
            if(element.hasOwnProperty(key)) return false;
        }
        return true;
    }
    else{
        return !!element;
    }
}