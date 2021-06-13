import { IUser } from "./IUser";

export class User implements IUser{
    id;
    user_firstname;
    user_lastname;
    user_login;
    user_email;
    user_avatar;
    user_password;
    user_joined;
    user_gender;
    user_role;
    user_block_reason;

    constructor(userObject){
        this.id                = userObject.id;
        this.user_firstname    = userObject.user_firstname;
        this.user_lastname     = userObject.user_lastname;
        this.user_login        = userObject.user_login;
        this.user_email        = userObject.user_email;
        this.user_avatar       = userObject.user_avatar;
        this.user_password     = userObject.user_password;
        this.user_joined       = userObject.user_joined;
        this.user_gender       = userObject.user_gender;
        this.user_role         = userObject.user_role; 
        this.user_block_reason = userObject.user_block_reason;
    }
}