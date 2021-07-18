import { methods } from "../../database/mongo/MongoDB";
import { ClientErrors } from "../../errors/ClientErrors";
import { FormErrors } from "../../errors/FormErrors";
import { isArrayEmpty, isObjectEmpty, isStringValid } from "../../helpers/DataHelper";
import { matchPasswords, notFound } from "./UsersHepler";

/**
 * Users authentication entry points 
 */
const AuthUsersAPI = {
    async login(req, res) {
        const { login, password } = req.body;

        // Invalid strings given. This happens when the user does NOT fill all
        // the fields. This error must be caught on the client, but in case if
        // there's a problem with the client validator, we can catch it here.

        // return res.json({
        //     validLogin: isStringValid(login),
        //     validPassword: isStringValid(password)
        // });

        if (!isStringValid(login) || !isStringValid(password)) {
            return res.status(400).json({ status: 400, message: FormErrors.emptyFields });
        }

        const user = await methods.get({ table: "users", where: { user_login: login } });

        // User with the given login does NOT exist
        if (isArrayEmpty(user)) {
            return notFound(res, FormErrors.notExists);
        }

        if (!matchPasswords(password, user[0].user_password)) {
            return res.status(400).json({ status: 400, message: FormErrors.wrongPassword });
        }

        return res.status(200).json({ status: 200, data: user[0] });
    },

    signup(req, res) {

    },

    // Reset users' password
    reset(req, res) {

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
        if (isObjectEmpty(query)) {
            return res.status(500).json({
                status: 500,
                message: "Сервер понял запрос, но отказывается его выполнять!"
            });
        }

        const response = await methods.get({ table: "users", where: query });

        // Nothing was found
        if (isArrayEmpty(response)) {
            return notFound(res, ClientErrors[404]);
        }

        // Success
        return res.json({ status: 200, data: response });
    },

    // Here we always have the id in the req.params
    async findUserWithId(req, res) {
        const { id } = req.params;

        // If we send a request with id, which length is not 24 characters, we get
        // an error from the database. It doesn't crash the server, but a response
        // doesn't come either, so we need to check it to avoid any possible errors.
        if (id.trim().length !== 24) {
            return notFound(res, ClientErrors[404]);
        }

        const response = await methods.get({ table: "users", where: { _id: id } });

        // Nothing was found
        if (isArrayEmpty(response)) {
            return notFound(res, ClientErrors[404]);
        }

        // Success
        return res.status(200).json({ status: 200, data: response });
    },

    // Deleting user with the id given in req.params
    deleteUser(req, res) { }
}

/**
 * Main module with users api entry points 
 */
export const UsersAPI = {
    ...AuthUsersAPI,
    ...DatabaseUsersAPI
};