import { database } from "../../database/query";

export const getUsers = (req, res) => {

    console.log("api log ", req.query);

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