"use strict";
exports.__esModule = true;
exports.pool = void 0;
var db_errors_1 = require("../list/db_errors");
var utils_1 = require("../script/utils");
var mysql = require('mysql2');
var dbConfig = utils_1.utils.json(require('../configs/database.json'));
/* ------------------------------------------------------------------ */
exports.pool = mysql.createPool(dbConfig);
if (!exports.pool)
    console.error(db_errors_1.dbErrors.CANTCONNECT);
exports.pool.on('error', function (e) {
    console.error("Error: " + e.code);
});
