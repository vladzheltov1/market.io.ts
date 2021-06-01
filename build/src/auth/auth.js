"use strict";
exports.__esModule = true;
var User_1 = require("../classes/User");
var db_errors_1 = require("../list/db_errors");
var form_errors_1 = require("../list/form_errors");
var query_1 = require("../database/query");
var create_router_1 = require("../helper/create_router");
var bodyParser = require('body-parser');
var hashPass = require('password-hash');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();
/* ------------------------------------------------------------------ */
create_router_1.RouterServer.post('/signup', function (req, res) {
    res.send("Sign up server page");
});
create_router_1.RouterServer.post('/signin', jsonParser, function (req, res) {
    if (!query_1.db.isConnected) {
        return res.json({ status: 400, error: db_errors_1.dbErrors.ECONNREFUSED });
    }
    var params = {
        login: req.body.login,
        password: req.body.pass
    };
    if (!params.login.trim() || !params.login.trim()) {
        return res.json({ status: 400, error: form_errors_1.formErrors.EMPTYFIELD });
    }
    query_1.db.getOne('SELECT * FROM `users` WHERE user_login = ?', [params.login], function (result) {
        if (result == null) {
            return res.json({ status: 400, error: form_errors_1.formErrors.NOTEXISTS });
        }
        if (result.error) {
            return res.json({ status: 400, error: result.error });
        }
        if (!hashPass.verify(params.password, result.user_password)) {
            return res.json({ status: 400, error: form_errors_1.formErrors.WRONGPASSWORD });
        }
        var user = new User_1.User(result.id, result.user_firstname, result.user_lastname, result.user_login, result.user_email, result.user_password, result.user_joined, result.user_sex, result.user_role, result.user_block_reason, result.user_phone);
        res.cookie("user", user);
        return res.json({ status: 200 });
    });
});
module.exports = create_router_1.RouterServer;
