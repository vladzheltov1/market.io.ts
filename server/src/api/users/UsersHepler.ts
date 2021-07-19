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

export const createHasedPassword = (password: string) => {
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
export const matchStrings = (string1: string, string2: string) => {
    return string1.trim() === string2.trim();
}

export const createUserModel = ({ firstname, lastname, email, login, gender, password1 }) => {
    // Creating hased password for saving to database
    const hashedPassword = createHasedPassword(password1);

    return User({
        user_firstname: firstname,
        user_lastname: lastname,
        user_email: email,
        user_login: login,
        user_gender: gender,
        user_password: hashedPassword
    });
}