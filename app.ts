/* Модули node */
const express      = require('express');
const cookieParser = require("cookie-parser");
const eslint       = require('eslint');
/* ----------- */


/* Мои модули */
const router  = require('./src/router/router');
const auth = require('./src/auth/auth');
const fetcher = require('./src/script/fetch');
/* ----------- */


/* Флаги */
const PRODUCTION: boolean = false; // изменить на true на хостинге
/* ----------- */


/* Серверные константы (не трогать) */
const APP  = express();
const PORT: string = process.env.PORT || '3000';
const IP: string   = process.env.IP   || "localhost";
/* ----------- */


/* Настройки сервера */
APP.set("view engine", "ejs");
APP.use("/client/", express.static(__dirname + '/../client/'));
APP.set("views", __dirname + "/../client/views");
APP.use(cookieParser());
APP.use(router);
APP.use('/api/user/', auth);
APP.use(fetcher);
/* ----------- */


/* Запуск сервера */
try{
    // Если на хостинге IP = "localhost", нужно выкинуть ошибку в консоль
    if(PRODUCTION && IP === "localhost") throw new Error(`Invalid global host ip: ${IP}`);

    APP.listen(PORT, IP, () => console.log(`Server has been started - ${IP}:${PORT}`));
}
catch(error){
    console.error(error);
}
/* ----------- */