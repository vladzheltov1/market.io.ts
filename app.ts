import { server } from "./src/configs/server";

/* Модули node */
const express      = require('express');
const cookieParser = require("cookie-parser");
/* ----------- */


/* Мои модули */
const auth    = require('./src/auth/auth');
const fetcher = require('./src/script/fetch');
const api     = require('./src/api/api');
const router  = require('./src/router/router');
/* ----------- */


/* Флаги */
const PRODUCTION: boolean = false; // изменить на true на хостинге
/* ----------- */


/* Серверные константы (не трогать) */
const APP  = express();
const PORT: string = server.PORT
const IP: string   = server.IP;
/* ----------- */


/* Настройки сервера */
APP.set("view engine", "ejs");
APP.use("/client/", express.static(__dirname + '/../client/'));
APP.set("views", __dirname + "/../client/views");
APP.use(cookieParser());
APP.use('/api/', api);
APP.use('/server/', auth);
APP.use(fetcher);
APP.use(router);
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