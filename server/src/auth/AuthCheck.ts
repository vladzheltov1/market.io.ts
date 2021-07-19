import { methods } from "../database/mongo/MongoDB";
import { isArrayEmpty, isStringValid } from "../helpers/DataHelper";
import { isIdValid } from "../helpers/DBHelper";

/**
 * Here we can check if the user, who is trying to take an action
 * is allowed to do it. This function will check if the user is admin.
 * 
 * @param {string} userID 
 * @returns `true/false/null`
 */
const checkAccess = async (userID: string) => {
    if (!isStringValid(userID) ||
        !isIdValid(userID)) {
        return null;
    }

    const response = await methods.get({ table: "users", where: { _id: userID } });

    // No user with the given id found
    if (isArrayEmpty(response)) return false;

    // User is not an admin
    if (response[0].user_role !== 2) return false;

    return true;
}

export {
    checkAccess
};

