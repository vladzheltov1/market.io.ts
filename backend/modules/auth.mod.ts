import { User } from '../classes/User.class';
import { dbErrors } from "../enums/dbErrors";
import { formErrors } from '../enums/formErrors';
import { db } from "../modules/database.mod";
import { RouterServer } from "../modules/routerInit.mod";

const bodyParser = require('body-parser');
const hashPass = require('password-hash');

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();

/* ------------------------------------------------------------------ */

RouterServer.post('/signup', (req, res) => {
    res.send("Sign up server page");
});

RouterServer.post('/signin', jsonParser, (req, res) => {
    
    if(!db.isConnected){
        return res.json({ status: 400, error: dbErrors.ECONNREFUSED });
    }

    const params = {
        login: req.body.login,
        password: req.body.pass
    };

    if(!params.login.trim() || !params.login.trim()){
        return res.json({status: 400, error: formErrors.EMPTYFIELD});
    }
    
    db.getOne('SELECT * FROM `users` WHERE user_login = ?', [params.login], (result) => {
        if(result == null){
            return res.json({status: 400, error: formErrors.NOTEXISTS});
        }
        if(result.error){
            return res.json({status: 400, error: result.error});
        }
        if(!hashPass.verify(params.password, result.user_password)){
            return res.json({status: 400, error: formErrors.WRONGPASSWORD});
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