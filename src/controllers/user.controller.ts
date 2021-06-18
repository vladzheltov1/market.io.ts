import { mongoDB } from "../database/queryMongo";
import { utils } from "../helper/utils";
import { formErrors } from "../list/formErrors";
import { UserServiceClass } from "../services/user.service";

const User = require("../models/User.schema");
const hashPass = require('password-hash');


class UserControllerClass extends UserServiceClass{

    /* ---------------------------- */
    /* -------- Auth block -------- */
    /* ---------------------------- */
    
    public async userLogin(req, res){
        const { login, password } = req.body;

        /*
         * We don't need to send a request to the server if any
         * field is empty, so we gotta check it here.
        */
        if((login || password) === undefined || login.trim().length === 0 || password.trim().length === 0){
            return res.json({status: 400, error: formErrors.EMPTYFIELD, errorDetail: "EMPTYFIELD"});
        }

    
        /*
         * Trying to find a user with the same login as entered.
         * If there's no user found, some errors will be sent.
        */
        mongoDB.getOne('users', {user_login: login}, (user) => {    
            if(user.error){
                return res.json({status: 400, error: user.error});
            }
            else if(utils.isObjectEmpty(user.result)){
                return res.json({status: 400, error: formErrors.NOTEXISTS, errorDetail: 'NOTEXISTS'});
            }
            else if(!hashPass.verify(password, user.result.user_password)){
                return res.json({status: 400, error: formErrors.WRONGPASSWORD, errorDetail: 'WRONGPASSWORD'});
            }

            // Login here
            // res.cookie("user", user);

            // HERE WE MUST GENERATE TOKENS 

            return res.json({status: 200});
        });
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


        mongoDB.getOne("users", {user_login: login}, (result) => {
            if(result.error) return res.status(400).json({status: 400, error: result.error});
            else if(!utils.isObjectEmpty(result.result)){
                return res.json({status: 400, error: formErrors.ALREADYEXISTS, errorDetail: 'ALREADYEXISTS'});
            }
        })

        mongoDB.getOne("users", {user_email: email}, (result) => {
            if(result.error) return res.status(400).json({status: 400, error: result.error});
            else if(!utils.isObjectEmpty(result.result)){
                return res.json({status: 400, error: formErrors.ALREADYEXISTS, errorDetail: 'ALREADYEXISTS'});
            }
        })

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

    /* --------------------------------- */
    /* -------- OTHER FUNCTIONS -------- */
    /* --------------------------------- */

    public getUsers(req, res){
        const { id } = req.params;

        if(id){
            mongoDB.getOne("users", {_id: id}, (result) => {
                if(result.error){
                    return res.status(result.status).json({status: result.status, error: result.error});
                }
                
                return res.status(result.status).json({status: result.status, result});
            });
        }
    }

    /* -------------------------------------- */
    /* ------------ Delete user ------------- */
    /* -------------------------------------- */
    public userDelete(req, res){
        // Code here...
    }
}

export const userController = new UserControllerClass();