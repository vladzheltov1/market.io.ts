/* Мои модули */
import { connect } from './src/database/connectMongo';

require('dotenv').config()

/* Модули node */
const express      = require('express');
const cookieParser = require("cookie-parser");
// const auth    = require('./src/auth/auth');
const fetcher = require('./src/helper/fetch');
const api     = require("./src/router/api.router");
// const router  = require('./src/router/router');
/* ----------- */


/* Флаги */
const PRODUCTION: boolean = false; // изменить на true на хостинге
/* ----------- */


/* Серверные константы (не трогать) */
const APP  = express();
const PORT: string = process.env.PORT;
const IP: string   = process.env.IP;
/* ----------- */


/* Настройки сервера */
APP.use(cookieParser());
APP.use(express.json());
APP.use('/api', api);
// APP.use(fetcher);
// APP.use(router);
/* ----------- */


/* Запуск сервера */
try{
    // Если на хостинге IP = "127.0.0.1", нужно выкинуть ошибку в консоль
    if(PRODUCTION && IP === "127.0.0.1") throw new Error(`Invalid global host ip: ${IP}`);

    connect();

    APP.listen(PORT, IP, () => console.log(`Server has been started - ${IP}:${PORT}`));
}
catch(error){
    console.error(error);
}
/* ----------- */
