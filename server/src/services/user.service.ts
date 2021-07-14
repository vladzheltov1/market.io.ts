const jwt = require('jsonwebtoken');
const uuid = require('uuid');
import { mongoDB } from "../database/mongoDB";
import { utils } from "../helper/utils";
const hashPass = require('password-hash');

class UserService {
    /**
     * Returns hashed password that can be saved to database.
     * @param {string} password 
     * @returns hashed password
     */
    public async hashPassword(password: string) {
        return await hashPass.generate(password);
    }

    /**
     * Matched password from user and the hashed password in database.
     * @param {string} givenPassword 
     * @param {string} hashedPassword 
     * @returns `true/false`
     */
    public verifyPassword(givenPassword: string, hashedPassword: string) {
        return hashPass.verify(givenPassword, hashedPassword);
    }

    /**
     * Returns ALL the users from database. 
     * @returns {Array<object>}
     */
    public async getUsers() {
        return await mongoDB.getAll('users');
    }

    /**
     * Returns ONE user with the given id.
     * @param {string} id 
     * @returns {object}
     */
    public getUserById(id: string) {
        return mongoDB.getOne("users", { _id: id });
    }

    /**
     * Check if 2 given passwords match.
     * @param {string} password1 
     * @param {string} password2 
     * @returns `true/false`
     */
    public passwordsMatch(password1: string, password2: string): boolean {
        if (typeof password1 !== "string" || typeof password2 !== "string") return null;
        return password1.trim() === password2.trim();
    }

    // --- TESTS DON'T WORK HERE --- //
    /**
     * Checks if user with such a login does already exist in the database.
     * @param {string} login 
     * @returns `true/false`
     */
    public async doesLoginExist(login: string) {
        const response = await mongoDB.getOne("users", { user_login: login });
        return !utils.isObjectEmpty(response);
    }

    /**
     * Checks if user with such an email does exist in the database. 
     * @param {string} email 
     * @returns `true/false`
     */
    public async doesEmailExist(email: string) {
        const response = await mongoDB.getOne("users", { user_email: email });
        return !utils.isObjectEmpty(response);
    }
}

export const userService = new UserService();