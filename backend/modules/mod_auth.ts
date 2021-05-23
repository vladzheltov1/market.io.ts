// npm
const auth = require('../modules/mod_routerInit');
const database = require('../modules/mod_database');
const bodyParser = require('body-parser');
const hashPass = require('password-hash');

// my modules
const serverUtilsMod = require('./mod_serverUtils');

// some settings
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();

auth.post('/signup', (req, res) => {
    res.send("Sign up server page");
});

auth.post('/signin', urlencodedParser, (req, res) => {
    const params = {
        login: req.body.login,
        password: req.body.password
    };

    if(!params.login.trim() || !params.login.trim()){
        res.redirect('/login/0');
    }
    else{
        database.query('SELECT * FROM `users` WHERE user_login = ?', [params.login], (error, result, field) => {
            
            if(result[0] == undefined){
                res.redirect('/login/2');
                return;
            }
            
            const resp = serverUtilsMod.jsonConvert(result[0]);


            if(!hashPass.verify(params.password, resp.user_password)){
                res.redirect('/login/3');
                return;
            }

            // Здесь заносим в сессию
            res.redirect('/login/7');
        });
    }
});

module.exports = auth;