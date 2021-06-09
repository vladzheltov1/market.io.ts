import { database } from "../database/query";
import { RouterServer } from "../helper/createRouter";
import { getProducts } from "./scripts/getProducts";

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();


RouterServer.get('/products/:id?', jsonParser, getProducts);
RouterServer.get('/users/:id?', jsonParser, (req, res) => {
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
});


module.exports = RouterServer;