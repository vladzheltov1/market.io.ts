"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(id, firstname, lastname, login, email, password, joined, sex, role, blockReason, phone) {
        this.id = id;
        this.user_firstname = firstname;
        this.user_lastname = lastname;
        this.user_login = login;
        this.user_email = email;
        this.user_password = password;
        this.user_joined = joined;
        this.user_sex = sex;
        this.user_role = role;
        this.user_block_reason = blockReason;
        this.user_phone = phone;
    }
    return User;
}());
exports.User = User;
