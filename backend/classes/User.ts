import { IUser } from "../interfaces/IUser";

export class User implements IUser{
    user_id;
    user_firstname;
    user_lastname;
    user_login;
    user_email;
    user_password;
    user_joined;
    user_sex;
    user_role;
    user_block_reason?;
    user_phone?;

    constructor(id, firstname, lastname, login, email, password, joined, sex, role, blockReason?, phone?){
        this.user_id           = id;
        this.user_firstname    = firstname;
        this.user_lastname     = lastname;
        this.user_login        = login;
        this.user_email        = email;
        this.user_password     = password;
        this.user_joined       = joined;
        this.user_sex          = sex;
        this.user_role         = role; 
        this.user_block_reason = blockReason;
        this.user_phone        = phone;
    }
}