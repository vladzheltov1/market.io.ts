import { database } from "../../database/query";
import { dbErrors } from "../../list/dbErrors";
import { formErrors } from "../../list/formErrors";

const hashPass = require('password-hash');
const fetch = require('node-fetch');

// ------------------------------------------------ //

export const signupScript = async (req, res) => {
    /*
     * Before we start doing anything, we need to check
     * if the database is connected. `isConnected` is a
     * function, that tries to send a request to the server
     * and if there is an error, it returns false, in the other
     * case it returns true.
    */
    if(!database.isConnected){
        return res.json({ status: 400, error: dbErrors.ECONNREFUSED });
    }

    
    // Creating `params` object to get the data easier.
    const params = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        login: req.body.login,
        password1: req.body.pass1,
        password2: req.body.pass2
    };


    /*
     * We don't need to send a request to the server if any
     * field is empty, so we gotta check it here.
    */
    if( !params.firstname.trim() ||
        !params.lastname.trim()  ||
        !params.email.trim()     ||
        !params.login.trim()     ||
        !params.password1.trim() ||
        !params.password2.trim())
    {
        return res.json({status: 400, error: formErrors.EMPTYFIELD, errorDetail: 'EMPTYFIELD'});
    }
    
    // Checking if password match
    else if(params.password1 != params.password2){
        return res.json({status: 400, error: formErrors.PASSNOTMATCH, errorDetail: 'PASSNOTMATCH'});
    }

    
}