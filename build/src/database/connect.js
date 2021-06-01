"use strict";
exports.__esModule = true;
exports.pool = void 0;
var database_1 = require("../configs/database");
var db_errors_1 = require("../list/db_errors");
var mysql = require('mysql2');
/* ------------------------------------------------------------------ */
exports.pool = mysql.createPool(database_1.db_config);
if (!exports.pool)
    console.error(db_errors_1.dbErrors.CANTCONNECT);
exports.pool.on('error', function (e) {
    console.error("Error: " + e.code);
});
