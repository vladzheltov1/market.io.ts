import { database } from "../database/query";
import { access } from "../helper/access";

/**
 *
 * Api script for users.
 *
 */



/* -------------------------------------- */
/* ------------ Delete user ------------- */
/* -------------------------------------- */

const deleteUser = async (req, res) => {
    const { id } = req.params;

    // Code here...
}

/* -------------------------------------- */
/* ------------ Get user(s) ------------- */
/* -------------------------------------- */

const getUsers = (req, res) => {

    if(!access['api'](req.query.token)){
        return res.status(403).json({error: "No access to API"});
    }

    if(req.params.id){
        database.getOne("SELECT * FROM users WHERE id = ?", [req.params.id], (user) => {
            if(user == null) return res.json({});
            else return res.json(user);
        });
    }
    else{
        if(req.query.login){
            database.getOne("SELECT * FROM users WHERE user_login = ?", [req.query.login], (user) => {
                if(user === null) return res.json({});
                else return res.status(200).json(user);
            });
        }
        else{
            database.getAll("SELECT * FROM users ORDER BY id DESC", [], (users) => {
                if(users === null) return res.json({});
                else return res.status(200).json(users);
            });
        }
    }
}

/* ------------------------- */
/* --- Exporting scripts --- */
/* ------------------------- */

export {
    deleteUser,
    getUsers
};

