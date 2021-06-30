const jwt = require('jsonwebtoken');
const uuid = require('uuid');
import { mongoDB } from "../database/mongoDB";
import { utils } from "../helper/utils";

class UserService{
    // General
    public hasEmptyFields(array: Array<string>): boolean{
        array.forEach(field => {
            if(field.trim() === "") return true;
        });
        return false;
    }

    // Database
    public getUserById(id: string){
        return mongoDB.getOne("users", {_id: id});
    }
    public async getUsers(){
        return await mongoDB.getAll('users');
    }

    // Signup
    public passwordsMatch(password1: string, password2: string): boolean{
        if(typeof password1 !== "string" || typeof password2 !== "string") return null;
        return password1.trim() === password2.trim();
    }
    public async doesLoginExist(login: string){
        const response = await mongoDB.getOne("users", {user_login: login});
        return !utils.isObjectEmpty(response);
    }
    public async doesEmailExist(email: string){
        const response = await mongoDB.getOne("users", {user_email: email});
        return !utils.isObjectEmpty(response);
    }
}

export const userService = new UserService();