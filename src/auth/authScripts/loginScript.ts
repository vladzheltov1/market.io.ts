import { User } from "../../classes/User";
import { adress } from "../../configs/server";
import { database } from "../../database/query";
import { dbErrors } from "../../list/dbErrors";
import { formErrors } from "../../list/formErrors";
import { isEmpty } from "../../script/utils";

const hashPass = require('password-hash');
const fetch = require('node-fetch');

// ------------------------------------------------ //

export const loginScript = async (req, res) => {
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
        login: req.body.login,
        password: req.body.pass
    };


    /*
     * We don't need to send a request to the server if any
     * field is empty, so we gotta check it here.
    */
    if(params.login.trim().length == 0 || params.password.trim().length == 0){
        return res.json({status: 400, error: formErrors.EMPTYFIELD, errorDetail: 'EMPTYFIELD'});
    }
    

    // This sends a request to the `api`
    const resp = await fetch(adress+"/api/users?login="+params.login+"&token="+process.env.TOKEN, {method: "get"});
    const serverData = await resp.json();


    // Some validation
    if(isEmpty(serverData)) return res.json({status: 400, error: formErrors.NOTEXISTS, errorDetail: 'NOTEXISTS'});
    else if(serverData.error) return res.json({status: 400, error: serverData.error});
    else if(!hashPass.verify(params.password, serverData.user_password)) return res.json({status: 400, error: formErrors.WRONGPASSWORD, errorDetail: 'WRONGPASSWORD'});


    /*
     * The class User implements the IUser interface, which 
     * contains all the fields. This class' contructor 
     * just gets all the fields from the `serverData`, which is
     * 100% an object, that has fields named by the database columns
     * in the table `users`
    */
    const user = new User(serverData);
    
    
    /*
     * Setting up a new field to cookies
    */
    res.cookie("user", user);

    return res.json({status: 200});
}