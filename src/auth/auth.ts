import { database } from "../database/query";
import { RouterServer } from "../helper/createRouter";
import { dbErrors } from "../list/dbErrors";
import { formErrors } from '../list/formErrors';
import { loginScript } from "./authScripts/loginScript";

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const bodyParser = require('body-parser');
const hashPass = require('password-hash');
const fetch = require('node-fetch');

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();

/* ------------------------------------------------------------------ */

RouterServer.post('/signup', jsonParser, (req, res) => {
    if(!database.isConnected){
        return res.json({ status: 400, error: dbErrors.ECONNREFUSED });
    }

    const params = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        login: req.body.login,
        password1: req.body.pass1,
        password2: req.body.pass2
    };

    if( !params.firstname.trim() ||
        !params.lastname.trim()  ||
        !params.email.trim()     ||
        !params.login.trim()     ||
        !params.password1.trim() ||
        !params.password2.trim())
    {
        return res.json({status: 400, error: formErrors.EMPTYFIELD, errorDetail: 'EMPTYFIELD'});
    }
    else if(params.password1 != params.password2){
        return res.json({status: 400, error: formErrors.PASSNOTMATCH, errorDetail: 'PASSNOTMATCH'});
    }
    
    database.getOne("SELECT * FROM `users` WHERE user_login = ? OR user_email = ?", [params.login, params.email], (result) => {
        if(result !== null){
            if(result.error) return res.json({status: 400, error: result.error});
            
            
        }
        else{
            const errorDetail = result.user_email ? "email ALREADYEXISTS" : "login ALREADYEXISTS";
            return res.json({ status: 400, error: formErrors.ALREADYEXISTS, errorDetail });
        }
    });
});

RouterServer.post('/signin', jsonParser, loginScript);

module.exports = RouterServer;