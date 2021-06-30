const jwt = require('jsonwebtoken');
const uuid = require('uuid');
import { mongoDB } from "../database/mongoDB";
import { utils } from "../helper/utils";

class UserService
{
    // General //
    /**
     * This function is used in controller to check
     * if any necessary fields sent by client are NOT empty.
     * @param {Array<string>} array
     * @returns {boolean}
     */
    public hasEmptyFields(array: Array<string>): boolean{
        array.forEach(field => {
            if(field.trim() === "") return true;
        });
        return false;
    }

    // Database //
    /**
     * This function is used in the controller.
     * It returns ALL the users in database. 
     * // probably i don't need it?
     * @returns {Array<object>}
     */
    public async getUsers(){
        return await mongoDB.getAll('users');
    }
    
    /**
     * Same as the function above, but this one
     * return ONE user with the id same as given.
     * @param {string} id 
     * @returns {object}
     */
     public getUserById(id: string){
        return mongoDB.getOne("users", {_id: id});
    }

    // Signup //
    /**
     * Check if 2 given passwords match after trim().
     * Return TRUE if they do, and FALSE if they don't.
     * @param {string} password1 
     * @param {string} password2 
     * @returns {boolean}
     */
    public passwordsMatch(password1: string, password2: string): boolean{
        if(typeof password1 !== "string" || typeof password2 !== "string") return null;
        return password1.trim() === password2.trim();
    }

    // --- TESTS DON'T WORK HERE --- //
    /**
     * Check if user with such login already exists in the
     * database. If login was found, return TRUE, else return FALSE.
     * @param {string} login 
     * @returns {boolean}
     */
    public async doesLoginExist(login: string){
        const response = await mongoDB.getOne("users", {user_login: login});
        return !utils.isObjectEmpty(response);
    }
    
    /**
     * Same as the function above, but this one checks 
     * if email exists in database. 
     * @param {string} email 
     * @returns {boolean}
     */
    public async doesEmailExist(email: string){
        const response = await mongoDB.getOne("users", {user_email: email});
        return !utils.isObjectEmpty(response);
    }
}

export const userService = new UserService();