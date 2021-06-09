import { db_config } from "../configs/database";
import { dbErrors } from "../list/dbErrors";

const mysql = require('mysql2');

/* ------------------------------------------------------------------ */

export const pool = mysql.createPool(db_config);

if(!pool) console.error(dbErrors.CANTCONNECT);

pool.on('error', function(e){
    console.error("Error: " + e.code);
})