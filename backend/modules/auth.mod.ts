import { User } from '../classes/User.class';
import { database } from "../modules/database.mod";
import { RouterServer } from "../modules/routerInit.mod";
import { ServerUtils } from "../modules/serverUtils.mod";

const bodyParser = require('body-parser');
const hashPass = require('password-hash');

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();
// const jsonParser = express.json();

/* ------------------------------------------------------------------ */

RouterServer.post('/signup', (req, res) => {
    res.send("Sign up server page");
});

RouterServer.post('/signin', jsonParser, (req, res) => {
    
    const params = {
        login: req.body.login,
        password: req.body.pass
    };

    if(!params.login.trim() || !params.login.trim()){
        return res.json({status: 400, error: "Одно или несколько полей пустые!"});
    }

    // if(!db.isConnected()){
    //     res.redirect('/login/11');
    //     return;
    // }

    // console.log(db.isConnected());
    
    database.query('SELECT * FROM `users` WHERE user_login = ?', [params.login], (error, result, field) => {
        // Ошибка подключения
        if(error){
            return res.json({ status: 400, error: 'Ошибка при соединении с базой данных!' });
        }

        console.log("RRR", result);

        // Результат пустой
        if(result == [] || result == undefined){
            return res.json({status: 400, error: "Такого пользователя не существует!"});
        }
        
        const resp = result[0] ? ServerUtils.JsonConvert(result[0]) : null;

        
        if(!hashPass.verify(params.password, resp.user_password)){
            return res.json({status: 400, error: "Неправильный пароль!"});
        }

        // Здесь создаём сессию, заносим в кукки

        const user = new User(
            resp.id,
            resp.user_firstname,
            resp.user_lastname,
            resp.user_login,
            resp.user_email,
            resp.user_password,
            resp.user_joined,
            resp.user_sex,
            resp.user_role,
            resp.user_block_reason,
            resp.user_phone
        );

        res.cookie("user", user);

        return res.json({status: 200});
    });
});

module.exports = RouterServer;