/* Модули node */
var express = require('express');
var fs = require('fs');
var path = require('path');
var cookieParser = require("cookie-parser");
/* ----------- */
/* Мои модули и api */
var appRouter = require('./backend/modules/mod_router');
var authRouter = require('./backend/modules/mod_auth');
// const sessionApi  = require('./backend/api/api_session');
/* ----------- */
/* Флаги */
var PRODUCTION = false; // изменить на true на хостинге
/* ----------- */
/* Серверные константы (не трогать) */
var APP = express();
var PORT = process.env.PORT || '3000';
var IP = process.env.IP || "localhost";
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
try {
    // Если на хостинге IP = "localhost", нужно выкинуть ошибку в консоль
    if (PRODUCTION && IP === "localhost")
        throw new Error("Invalid global host ip: " + IP);
    APP.listen(PORT, IP, function () { return console.log("Server has been started - " + IP + ":" + PORT); });
}
catch (error) {
    console.error(error);
}
/* ----------- */ 
