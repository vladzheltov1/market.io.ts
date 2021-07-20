import { checkAccess } from "../../auth/AuthCheck";
import { methods } from "../../database/mongo/MongoDB";
import { ClientErrors } from "../../errors/ClientErrors";
import { FormErrors } from "../../errors/FormErrors";
import * as dataValidator from "../../helpers/DataHelper";
import { isIdValid } from "../../helpers/DBHelper";
import {
    createUserModel,
    matchPasswords,
    matchStrings,
    notFound
} from "./UsersHepler";

/**
 * Users authentication endpoints 
 */
const AuthUsersAPI = {
    /**
     * User login script
     */
    async login(req, res) {
        const { login, password } = req.body;

        // Invalid strings given. This happens when a user does NOT fill all
        // the fields. This error must be caught on the client, but in case if
        // there's a problem with the client validator, we can catch it here.

        // Check if we need it here. Client validator seems to work great.
        if (!dataValidator.isStringValid(login) || !dataValidator.isStringValid(password)) {
            return res.status(400).json({ status: 400, message: FormErrors.emptyFields });
        }

        const user = await methods.get({ table: "users", where: { user_login: login } });

        // User with the given login does NOT exist
        if (dataValidator.isArrayEmpty(user)) {
            return notFound(res, FormErrors.notExists);
        }

        if (!matchPasswords(password, user[0].user_password)) {
            return res.status(400).json({ status: 400, message: FormErrors.wrongPassword });
        }

        return res.status(200).json({ status: 200, data: user[0] });
    },

    /**
     * User signup script
     */
    async signup(req, res) {
        const { firstname, lastname, email, login, gender, password1, password2 } = req.body;

        // Invalid data
        if (!dataValidator.isStringInArrayValid([firstname, lastname, email, login, gender, password1, password2])) {
            return res.status(400).json({ status: 400, message: FormErrors.emptyFields });
        }

        // Test if such user already exists
        const emailInSystem = await methods.get({ table: "users", where: { user_email: email } });
        const loginInSystem = await methods.get({ table: "users", where: { user_login: login } });

        // Any data was found
        if (!dataValidator.isArrayEmpty(emailInSystem) || !dataValidator.isArrayEmpty(loginInSystem)) {
            return res.status(400).json({ status: 400, message: FormErrors.alreadyExists });
        }

        if (!matchStrings(password1, password2)) {
            return res.status(400).json({ status: 400, message: FormErrors.passNotMatch });
        }

        // Creating an new object with UserModel
        const user = createUserModel({
            firstname,
            lastname,
            email,
            gender,
            login,
            password1
        });

        await user.save();

        // Ok
        res.status(200).json({ status: 200 });
    },

    /**
     * Reset users' password
     */
    async reset(req, res) {
        // Here we must change the password by sending a code
        // to the user's email and then checking it here
    }
}

/**
 * Actions with users that need the database
 */
const DatabaseUsersAPI = {
    // Finding users with query params
    async findUsersWithParams(req, res) {
        const query = req.query;

        // We can't execute the query without query params because in this case
        // we'll always get the whole list of users, which is not safe.
        if (dataValidator.isObjectEmpty(query)) {
            return res.status(500).json({
                status: 500,
                message: "Сервер понял запрос, но отказывается его выполнять!"
            });
        }

        const response = await methods.get({ table: "users", where: query });

        // Nothing was found
        if (dataValidator.isArrayEmpty(response)) {
            return notFound(res, ClientErrors[404]);
        }

        // Success
        return res.json({ status: 200, data: response });
    },

    /**
     * Find user by id
     */
    async findUserWithId(req, res) {
        // This endpoint only works when it gets an id, so we don't need to check if it's given 
        const { id } = req.params;

        // If we send a request with id, which length is not 24 characters, we get
        // an error from the database. It doesn't crash the server, but a response
        // doesn't come either, so we need to check it to avoid any possible errors.
        if (!isIdValid(id)) {
            return notFound(res, ClientErrors[404]);
        }

        const response = await methods.get({ table: "users", where: { _id: id } });

        // Nothing was found
        if (dataValidator.isArrayEmpty(response)) {
            return notFound(res, ClientErrors[404]);
        }

        // Success
        return res.status(200).json({ status: 200, data: response });
    },

    /**
     * Deleting user with the id given in req.params
     */
    async deleteUser(req, res) {
        const { id, authID } = req.body;

        // The user has no access to this action
        if (!checkAccess(authID)) {
            return res.status(403).json({ status: 403, message: ClientErrors[403] });
        }

        // Simple id validation
        if (!isIdValid(id)) {
            return res.status(400).json({ status: 400, message: "Данные не прошли проверку!" })
        }

        const response = await methods.delete({ table: "users", id });

        // There were problems taking this action
        if (!response.ok) return res.status(500).json({
            status: 500,
            ok: response.ok,
            message: "Не удалось выполнить данное действие!",
        });

        // Successfully deleted
        return res.status(200).json({
            status: 200,
            ok: response.ok
        })
    }
}

/**
 * Main module with users api entry points 
 */
export const UsersAPI = {
    ...AuthUsersAPI,
    ...DatabaseUsersAPI
};