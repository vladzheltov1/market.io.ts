import { mongoDB } from "../database/mongoDB";
import { formErrors } from "../list/formErrors";
import { UserServiceClass } from "../services/user.service";

const User = require("../models/User.schema");
const hashPass = require('password-hash');

class UserControllerClass extends UserServiceClass{
    
    public async userLogin(req, res){
        const { login, password } = req.body;

        if((login || password) === undefined || login.trim().length === 0 || password.trim().length === 0){
            return res.json({status: 400, message: formErrors.EMPTYFIELD});
        }

        const candidate: object = await mongoDB.getOne("users", {user_login: login});

        if(candidate["status"] === 404){
            return res.json({status: 404, message: formErrors.NOTEXISTS});
        }
        if(!hashPass.verify(password, candidate["data"].user_password)){
            return res.json({status: 400, message: formErrors.WRONGPASSWORD});
        }

        const data = {
            _id: candidate["data"]._id,
            firstname: candidate["data"].user_firstname,
            lastname: candidate["data"].user_lastname,
            role: candidate["data"].user_role,
            avatar: candidate["data"].user_avatar
        }

        return res.json({status: 200, data});
    };

    public async userSignUp(req, res){
        const { firstname, lastname, email, login, gender, pass1, pass2 } = req.body;

        /*
         * We don't need to send a request to the server if any
         * field is empty, so we gotta check it here.
        */
        if(!firstname.trim() 
            || !lastname.trim() 
            || !email.trim() 
            || !login.trim() 
            || !gender.trim() 
            || !pass1.trim() 
            || !pass2.trim()
        ) {
            return res.json({status: 400, error: formErrors.EMPTYFIELD, errorDetail: 'EMPTYFIELD'});
        }

        // Checking if password match
        else if(pass1.trim() !== pass2.trim()){
            return res.json({status: 400, error: formErrors.PASSNOTMATCH, errorDetail: 'PASSNOTMATCH'});
        }


        // mongoDB.getOne("users", {user_login: login}, (result) => {
        //     if(result.error) return res.status(400).json({status: 400, error: result.error});
        //     else if(!utils.isObjectEmpty(result.result)){
        //         return res.json({status: 400, error: formErrors.ALREADYEXISTS, errorDetail: 'ALREADYEXISTS'});
        //     }
        // })

        // mongoDB.getOne("users", {user_email: email}, (result) => {
        //     if(result.error) return res.status(400).json({status: 400, error: result.error});
        //     else if(!utils.isObjectEmpty(result.result)){
        //         return res.json({status: 400, error: formErrors.ALREADYEXISTS, errorDetail: 'ALREADYEXISTS'});
        //     }
        // })

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

        // HERE WE MUST GENERATE TOKENS 

        return res.json({status: 201});
    };

    public async userLogOut(req, res){

    };


    public async getUsers(req, res){
        const { id } = req.params;

        const response = id 
            ? await mongoDB.getOne("users", {_id: id})
            : await mongoDB.getAll("users");

        return res.json(response);
    }

    /* -------------------------------------- */
    /* ------------ Delete user ------------- */
    /* -------------------------------------- */
    public userDelete(req, res){
        // Code here...
    }
}

export const userController = new UserControllerClass();