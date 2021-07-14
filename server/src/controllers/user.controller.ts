import { userAdapter } from "../adapters/user.adapter";
import { mongoDB } from "../database/mongoDB";
import { formErrors } from "../errors/lists/formErrors";
import { userService } from "../services/user.service";
import { arrayHasEmptyFields, isStringValid } from "../validations/data.validation";

const User = require("../models/User.schema");

class UserController {

    public async userLogin(req, res) {
        const { login, password } = req.body;

        if (!isStringValid(login) || !isStringValid(password)) {
            return res.json({ status: 400, message: formErrors.EMPTYFIELD });
        }

        const candidate: object = await mongoDB.getOne("users", { user_login: login });

        if (candidate["status"] === 404) {
            return res.json({ status: 404, message: formErrors.NOTEXISTS });
        }

        if (!userService.verifyPassword(password, candidate["data"].user_password)) {
            return res.json({ status: 400, message: formErrors.WRONGPASSWORD });
        }

        const data = userAdapter['set_client_data'](candidate['data']);
        return res.json({ status: 200, data });
    };

    public async userSignUp(req, res) {
        const { firstname, lastname, email, login, gender, pass1, pass2 } = req.body;

        if (arrayHasEmptyFields([firstname, lastname, email, login, gender, pass1, pass2])) {
            return res.json({ status: 400, error: formErrors.EMPTYFIELD });
        }

        else if (userService.passwordsMatch(pass1, pass1) === false) {
            return res.json({ status: 400, error: formErrors.PASSNOTMATCH });
        }

        const hashedPassword = userService.hashPassword(pass1);

        const user = User({
            user_firstname: firstname,
            user_lastname: lastname,
            user_email: email,
            user_login: login,
            user_gender: gender,
            user_password: hashedPassword
        });

        await user.save();

        return res.json({ status: 201 });
    };

    public async userLogOut(req, res) {

    };


    public async getUsers(req, res) {
        const { id } = req.params;

        const response = id
            ? await userService.getUserById(id)
            : await userService.getUsers();

        return res.json(response);
    }

    public userDelete(req, res) {
        // Code here...
    }
}

export const userController = new UserController();