const hash = require("password-hash");

// The helper must NOT be used outside of the UsersAPI file

/**
 * Helper function to return data if nothing was found.
 * Usage: "return notFound(res)" 
 */
export const notFound = (res, message: string) => {
    return res.status(404).json({ status: 404, message: message });
}

/**
 * Function that verifies the given password and the hashed password in database.
 * @param givenPassword 
 * @param databasePassword 
 * @returns `true/false`
 */
export const matchPasswords = (givenPassword: string, databasePassword: string): boolean => {
    return hash.verify(givenPassword, databasePassword);
}