import { User } from '../classes/User';
import { database } from "../database/query";
import { RouterServer } from "../helper/create_router";
import { dbErrors } from "../list/db_errors";
import { formErrors } from '../list/form_errors';

const bodyParser = require('body-parser');
const hashPass = require('password-hash');

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

RouterServer.post('/signin', jsonParser, (req, res) => {
    
    if(!database.isConnected){
        return res.json({ status: 400, error: dbErrors.ECONNREFUSED });
    }

    const params = {
        login: req.body.login,
        password: req.body.pass
    };

    if(!params.login.trim() || !params.login.trim()){
        return res.json({status: 400, error: formErrors.EMPTYFIELD, errorDetail: 'EMPTYFIELD'});
    }
    
    database.getOne('SELECT * FROM `users` WHERE user_login = ?', [params.login], (result) => {
        if(result == null){
            return res.json({status: 400, error: formErrors.NOTEXISTS, errorDetail: 'NOTEXISTS'});
        }
        if(result.error){
            return res.json({status: 400, error: result.error});
        }
        if(!hashPass.verify(params.password, result.user_password)){
            return res.json({status: 400, error: formErrors.WRONGPASSWORD, errorDetail: 'WRONGPASSWORD'});
        }

        const user = new User(
            result.id,
            result.user_firstname,
            result.user_lastname,
            result.user_login,
            result.user_email,
            result.user_password,
            result.user_joined,
            result.user_sex,
            result.user_role,
            result.user_block_reason,
            result.user_phone
        );

        res.cookie("user", user);

        return res.json({status: 200});
    });
});

module.exports = RouterServer;