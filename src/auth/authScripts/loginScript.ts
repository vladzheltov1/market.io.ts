import { adress } from "../../configs/server";
import { database } from "../../database/query";
import { isEmpty } from "../../helper/utils";
import { dbErrors } from "../../list/dbErrors";
import { formErrors } from "../../list/formErrors";
// import { User } from "../../models/User";

const hashPass = require('password-hash');
const fetch = require('node-fetch');
const User = require("../../models/User.schema");

// ------------------------------------------------ //

export const loginScript = async (req, res) => {

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
    await User.findOne({ user_login: login }).exec((err, user) => {
        if(!user)
            return res.json({status: 400, error: formErrors.NOTEXISTS, errorDetail: 'NOTEXISTS'});
        else if(!hashPass.verify(password, user.user_password))
            return res.json({status: 400, error: formErrors.WRONGPASSWORD, errorDetail: 'WRONGPASSWORD'});

        res.cookie("user", user);

        return res.json({status: 200});
    });
}
