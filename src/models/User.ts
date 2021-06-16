import { IUser } from "./IUser";

export class User implements IUser{

    id: number;
    user_firstname: string;
    user_lastname: string;
    user_login: string;
    user_email: string;
    user_avatar: string;
    user_password: string;
    user_joined: string | number;
    user_role: number;
    user_block_reason: string;
    user_gender: number;


    constructor(userObject){

        // Old code

        // this.id                = userObject.id;
        // this.user_firstname    = userObject.user_firstname;
        // this.user_lastname     = userObject.user_lastname;
        // this.user_login        = userObject.user_login;
        // this.user_email        = userObject.user_email;
        // this.user_avatar       = userObject.user_avatar;
        // this.user_password     = userObject.user_password;
        // this.user_joined       = userObject.user_joined;
        // this.user_gender       = userObject.user_gender;
        // this.user_role         = userObject.user_role; 
        // this.user_block_reason = userObject.user_block_reason;

        for(let key in userObject){
            this[key] = userObject[key];
        }
    }
}