import { User } from '../classes/User';
import { RouterServer } from "../modules/mod_routerInit";
import { ServerUtils } from "../modules/mod_serverUtils";

const database = require('../modules/mod_database');
const bodyParser = require('body-parser');
const hashPass = require('password-hash');

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();

/* ------------------------------------------------------------------ */

RouterServer.post('/signup', (req, res) => {
    res.send("Sign up server page");
});

RouterServer.post('/signin', urlencodedParser, (req, res) => {
    
    const params = {
        login: req.body.login,
        password: req.body.password
    };

    if(!params.login.trim() || !params.login.trim()){
        res.redirect('/login/0');
        return;
    }
    
    database.query('SELECT * FROM `users` WHERE user_login = ?', [params.login], (error, result, field) => {

        if(result[0] == undefined){
            res.redirect('/login/2');
            return;
        }
        
        const resp = ServerUtils.JsonConvert(result[0]);


        if(!hashPass.verify(params.password, resp.user_password)){
            res.redirect('/login/3');
            return;
        }

        // Здесь создаём сессию, заносим в кукки

        const user = new User(
            resp.user_id,
            resp.user_firstname,
            resp.user_lastname,
            resp.user_login,
            resp.user_email,
            resp.user_password,
            resp.user_joined,
            resp.user_sex,
            resp.user_role,
            resp.user_block_reason,
            resp.user_phone
        );

        res.cookie("user", user);

        res.redirect('/');
    });
});

module.exports = RouterServer;