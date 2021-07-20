const hash = require("password-hash");
const User = require("../../models/UserSchema");

// The helper must NOT be used outside of the UsersAPI file

/**
 * Helper function to return data if nothing was found.
 * Usage: "return notFound(res)" 
 */
export const notFound = (res, message: string) => {
    return res.status(404).json({ status: 404, message: message });
}

/**
 * Create hased password for saving to database
 * @param {string} password 
 * @returns {string} hashed password
 */
export const createHasedPassword = (password: string): string => {
    return hash.generate(password);
}

/**
 * Function that verifies the given password and the hashed password in database.
 * 
 * @param givenPassword 
 * @param databasePassword 
 * @returns `true/false`
 */
export const matchPasswords = (givenPassword: string, databasePassword: string): boolean => {
    return hash.verify(givenPassword, databasePassword);
}

/**
 * Check if the 2 given strings are equal.
 * 
 * @param {string} string1 
 * @param {string} string2 
 * @returns `true/false`
 */
export const matchStrings = (string1: string, string2: string): boolean => {
    return string1.trim() === string2.trim();
}

/**
 * Create a new user object with all the required fields, and ready to be saved to the database
 * @returns An object based on the User model in database.
 */
export const createUserModel = ({ firstname, lastname, email, login, gender, password1 }) => {
    const hashedPassword = createHasedPassword(password1);

    return User({
        firstname: firstname,
        lastname: lastname,
        email: email,
        login: login,
        gender: gender,
        password: hashedPassword
    });
}