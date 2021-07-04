import { status as httpStatus } from "./lists/httpStatus";


class Error{

    public notifyDeveloper(error){
        console.error(error);        
    }
    public notifyUser(error){
        // Here we must send this error to the client
        // and the client must show it.
    }

    public getHTTP(status){
        return httpStatus[status]
    }

    public getForm(){

    }
}

export const errors = new Error();