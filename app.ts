/* Модули node */
const express      = require('express');
const cookieParser = require("cookie-parser");
/* ----------- */


/* Мои модули */
const router  = require('./src/router/router');
const auth = require('./src/auth/auth');
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
APP.use("/frontend/source", express.static(__dirname + '/../client/source'));
APP.set("views", __dirname + "/../client/views");
APP.use(cookieParser());
APP.use(router);
APP.use('/api/user/', auth);
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