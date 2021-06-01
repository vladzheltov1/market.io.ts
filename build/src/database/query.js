"use strict";
exports.__esModule = true;
exports.db = void 0;
var connect_1 = require("./connect");
var db_errors_1 = require("../list/db_errors");
var Database = /** @class */ (function () {
    function Database() {
        /*
            Проверяет, есть ли подключение к базе данных
        */
        this.isConnected = function () {
            connect_1.pool('SELECT id FROM users WHERE id = 5', function (err) {
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
                throw new Error(db_errors_1.dbErrors.EMPTYQUERY);
            connect_1.pool.query(query, params, function (error, results) {
                /* Если есть ошибка при обращении к базе */
                if (error) {
                    callback({ error: db_errors_1.dbErrors[error.code] });
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
                throw new Error(db_errors_1.dbErrors.EMPTYQUERY);
            connect_1.pool.query(query, params, function (error, results) {
                /* Если есть ошибка при обращении к базе */
                if (error) {
                    callback({ error: db_errors_1.dbErrors[error.code] });
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
