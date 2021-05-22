/* Модули node */
const express = require('express');
/* ----------- */


/* Мои модули */
const appRouter  = require('./backend/modules/mod_router');
/* ----------- */


/* Флаги */
const SERVER: boolean = false; // изменить на true на хостинге
/* ----------- */


/* Константы (не трогать) */
const APP  = express();
const PORT: string = process.env.PORT || '3000';
const IP: string   = process.env.IP || "localhost";
/* ----------- */


/* Настройки сервера */
APP.set("view engine", "ejs");
APP.use("/frontend/source", express.static(__dirname + '/frontend/source'));
APP.set("views", __dirname + "/frontend/views");
APP.use(appRouter);
/* ----------- */


/* Запуск сервера */
try{
    // Если на хостинге IP = "localhost", нужно выкинуть ошибку в консоль, сервер не запускать
    if(SERVER && IP === "localhost") throw new Error(`Invalid global host ip: ${IP}`);

    APP.listen(PORT, IP, () => console.log(`Server has been started - ${IP}:${PORT}`));
}
catch(error){
    console.error(error);
}
/* ----------- */