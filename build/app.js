/* Модули node */
var express = require('express');
var cookieParser = require("cookie-parser");
/* ----------- */
/* Мои модули */
var router = require('./src/router/router');
var auth = require('./src/auth/auth');
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
APP.use("/client/", express.static(__dirname + '/../client/'));
APP.set("views", __dirname + "/../client/views");
APP.use(cookieParser());
APP.use(router);
APP.use('/api/user/', auth);
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
