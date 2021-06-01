import { dbErrors } from "../list/db_errors";
import { utils } from "../script/utils";

const mysql = require('mysql2');
const dbConfig = utils.json(require('../configs/database.json'));

/* ------------------------------------------------------------------ */

export const pool = mysql.createPool(dbConfig);

if(!pool) console.error(dbErrors.CANTCONNECT);

pool.on('error', function(e){
    console.error("Error: " + e.code);
})