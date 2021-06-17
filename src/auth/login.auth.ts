import { mongoDB } from "../database/queryMongo";
import { utils } from "../helper/utils";
import { formErrors } from "../list/formErrors";

const hashPass = require('password-hash');

// ------------------------------------------------ //


/* ----------- DEPRECATED ----------- */
/* USE SERVICE AND CONTROLLER INSTEAD */


export const loginAuth = async (req, res) => {

    console.log("USING DEPRICATED MODULE `src/auth/login.auth.ts`");
    
    const { login, password } = req.body;

    /*
     * We don't need to send a request to the server if any
     * field is empty, so we gotta check it here.
    */
    if((login || password) === undefined || login.trim().length === 0 || password.trim().length === 0){
        return res.json({status: 400, error: formErrors.EMPTYFIELD, errorDetail: "EMPTYFIELD"});
    }

    /*
     * Trying to find a user with the same login as entered.
     * If there's no user found, some errors will be sent.
     */

    mongoDB.getOne('users', {user_login: login}, (user) => {
        if(user.error){
            return res.json({status: 400, error: user.error});
        }
        else if(utils.isObjectEmpty(user.result)){
            return res.json({status: 400, error: formErrors.NOTEXISTS, errorDetail: 'NOTEXISTS'});
        }
        else if(!hashPass.verify(password, user.user_password)){
            return res.json({status: 400, error: formErrors.WRONGPASSWORD, errorDetail: 'WRONGPASSWORD'});
        }

        // Login here
        // res.cookie("user", user);

        return res.json({status: 200});
    })
}
