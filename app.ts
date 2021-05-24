/* Модули node */
const express      = require('express');
const fs           = require('fs');
const path         = require('path');
const cookieParser = require("cookie-parser");
/* ----------- */


/* Мои модули и api */
const appRouter  = require('./backend/modules/mod_router');
const authRouter = require('./backend/modules/mod_auth');
// const sessionApi  = require('./backend/api/api_session');
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
APP.use("/frontend/source", express.static(__dirname + '/frontend/source'));
APP.set("views", __dirname + "/frontend/views");
APP.use(cookieParser());
APP.use(appRouter);
APP.use('/api/user/', authRouter);
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