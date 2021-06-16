import { formErrors } from "../list/formErrors";

const hashPass = require('password-hash');
const fetch = require('node-fetch');
const User = require("../models/User.schema");

// ------------------------------------------------ //

export const signupAuth = async (req, res) => {

    const { firstname, lastname, email, login, gender, pass1, pass2 } = req.body;

    /*
     * We don't need to send a request to the server if any
     * field is empty, so we gotta check it here.
    */
    if(!firstname.trim() || !lastname.trim() || !email.trim() || !login.trim() || !gender.trim() || !pass1.trim() || !pass2.trim()) {
        return res.json({status: 400, error: formErrors.EMPTYFIELD, errorDetail: 'EMPTYFIELD'});
    }

    // Checking if password match
    else if(pass1 != pass2){
        return res.json({status: 400, error: formErrors.PASSNOTMATCH, errorDetail: 'PASSNOTMATCH'});
    }

    const findLogin = User.findOne({user_login: login});
    const findEmail = User.findOne({user_email: email});

    findLogin.exec((err, user) => {
        if(err) console.error(err);
        else if(user) return res.json({status: 400, error: formErrors.ALREADYEXISTS, errorDetail: 'ALREADYEXISTS'});
    });
    findEmail.exec((err, user) => {
        if(err) console.error(err);
        else if(user) return  res.json({status: 400, error: formErrors.ALREADYEXISTS, errorDetail: 'ALREADYEXISTS'});
    });

    const hashedPassword = hashPass.generate(pass1);

    const user = User({
        user_firstname: firstname,
        user_lastname: lastname,
        user_email: email,
        user_login: login,
        user_gender: gender,
        user_password: hashedPassword
    });

    await user.save();

    return res.status(201).join({status: 201});
}
