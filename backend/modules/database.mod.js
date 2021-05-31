"use strict";
exports.__esModule = true;
exports.db = exports.pool = void 0;
var dbErrors_1 = require("../enums/dbErrors");
var mysql = require('mysql2');
var dbConfig = JSON.parse(JSON.stringify(require('../configs/database.cfg.json')));
/* ------------------------------------------------------------------ */
exports.pool = mysql.createPool(dbConfig);
if (!exports.pool)
    console.error(dbErrors_1.dbErrors.CANTCONNECT);
exports.pool.on('error', function (e) {
    console.error("Error: " + e.code);
});
var Database = /** @class */ (function () {
    function Database() {
        /*
            Проверяет, есть ли подключение к базе данных
        */
        this.isConnected = function () {
            exports.pool('SELECT id FROM users WHERE id = 5', function (err) {
                if (err)
                    return false;
                else
                    return true;
            });
        };
        /*
            Получает на вход sql запрос и параметры (если есть)
            Возвращает все ряды, найденные по этому запросу
        */
        this.getAll = function (query, params, callback) {
            if (params === void 0) { params = []; }
            /* Пустой запрос */
            if (!query)
                throw new Error(dbErrors_1.dbErrors.EMPTYQUERY);
            exports.pool.query(query, params, function (error, results) {
                /* Если есть ошибка при обращении к базе */
                if (error) {
                    callback({ error: dbErrors_1.dbErrors[error.code] });
                    return;
                }
                /* Ничего не найдено */
                if (!results[0]) {
                    callback(null);
                    return;
                }
                /* Всё нормально */
                callback(results);
            });
        };
        /*
            Тоже самое, что и функция выше, но возвращает только один ряд
        */
        this.getOne = function (query, params, callback) {
            if (params === void 0) { params = []; }
            /* Пустой запрос */
            if (!query)
                throw new Error(dbErrors_1.dbErrors.EMPTYQUERY);
            exports.pool.query(query, params, function (error, results) {
                /* Если есть ошибка при обращении к базе */
                if (error) {
                    callback({ error: dbErrors_1.dbErrors[error.code] });
                    return;
                }
                /* Ничего не найдено */
                if (!results[0]) {
                    callback(null);
                    return;
                }
                /* Всё нормально */
                callback(results[0]);
            });
        };
    }
    return Database;
}());
exports.db = new Database();
