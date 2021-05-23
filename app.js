/* Модули node */
var express = require('express');
var fs = require('fs');
var path = require('path');
/* ----------- */
/* Мои модули */
var appRouter = require('./backend/modules/mod_router');
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
APP.use(appRouter);
/* ----------- */
/* Запуск сервера */
try {
    // Если на хостинге IP = "localhost", нужно выкинуть ошибку в консоль, сервер не запускать
    if (PRODUCTION && IP === "localhost")
        throw new Error("Invalid global host ip: " + IP);
    APP.listen(PORT, IP, function () { return console.log("Server has been started - " + IP + ":" + PORT); });
}
catch (error) {
    console.error(error);
}
/* ----------- */ 
