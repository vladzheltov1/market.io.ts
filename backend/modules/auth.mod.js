"use strict";
exports.__esModule = true;
var User_class_1 = require("../classes/User.class");
var dbErrors_1 = require("../enums/dbErrors");
var formErrors_1 = require("../enums/formErrors");
var database_mod_1 = require("../modules/database.mod");
var routerInit_mod_1 = require("../modules/routerInit.mod");
var bodyParser = require('body-parser');
var hashPass = require('password-hash');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();
/* ------------------------------------------------------------------ */
routerInit_mod_1.RouterServer.post('/signup', function (req, res) {
    res.send("Sign up server page");
});
routerInit_mod_1.RouterServer.post('/signin', jsonParser, function (req, res) {
    if (!database_mod_1.db.isConnected) {
        return res.json({ status: 400, error: dbErrors_1.dbErrors.ECONNREFUSED });
    }
    var params = {
        login: req.body.login,
        password: req.body.pass
    };
    if (!params.login.trim() || !params.login.trim()) {
        return res.json({ status: 400, error: formErrors_1.formErrors.EMPTYFIELD });
    }
    database_mod_1.db.getOne('SELECT * FROM `users` WHERE user_login = ?', [params.login], function (result) {
        if (result == null) {
            return res.json({ status: 400, error: formErrors_1.formErrors.NOTEXISTS });
        }
        if (result.error) {
            return res.json({ status: 400, error: result.error });
        }
        if (!hashPass.verify(params.password, result.user_password)) {
            return res.json({ status: 400, error: formErrors_1.formErrors.WRONGPASSWORD });
        }
        var user = new User_class_1.User(result.id, result.user_firstname, result.user_lastname, result.user_login, result.user_email, result.user_password, result.user_joined, result.user_sex, result.user_role, result.user_block_reason, result.user_phone);
        res.cookie("user", user);
        return res.json({ status: 200 });
    });
});
module.exports = routerInit_mod_1.RouterServer;
