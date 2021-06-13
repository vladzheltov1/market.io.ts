import { formErrors } from "../list/formErrors";
import { IValidator } from "../models/IValidator";

class Validator implements IValidator{
    email(field, required){
        if(required && field.trim().length === 0) return formErrors.EMPTYFIELD;
        
        return true;
    }
    textField(field, required, min?, max?){
        if(required && field.trim().length === 0) return formErrors.EMPTYFIELD;
        else if(min && field.length < min) return formErrors.NOMIN;
        else if(max && field.length > max) return formErrors.OVERMAX;
        
        return true;
    }
    password(field){
        if(!field) return formErrors.EMPTYPASSWORD;
        else if(field.trim().length < 8) return formErrors.SHORTPASSWORD;

        return true;
    }
    passwordMatch(pass1, pass2){
        if(pass1.trim().length === 0 || pass2.trim().length === 0) return formErrors.EMPTYPASSWORD;
        else if(pass1 !== pass2) return formErrors.PASSNOTMATCH;

        return true;
    }
}

export const validate = new Validator();