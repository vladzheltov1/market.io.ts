/* my modules */
import { connect } from './database/connectMongo';

require('dotenv').config()

/* node_modules */
const express      = require('express');
const cookieParser = require("cookie-parser");
const api          = require("./router/api.router");
// const auth    = require('./src/auth/auth');
// const fetcher = require('./src/helper/fetch');
// const router  = require('./src/router/router');
/* ----------- */


/* flags */
const PRODUCTION: boolean = false; // set `true` when on production
/* ----------- */


/* Серверные константы (не трогать) */
const APP          = express();
const PORT: string = process.env.PORT;
const IP: string   = process.env.IP;
/* ----------- */


/* Настройки сервера */
APP.use(cookieParser());
APP.use(express.json());
APP.use('/api', api);
/* ----------- */


/* Starting the server */
try{
    /* 
     * If the IP on the production server is "127.0.0.1",
     * we need to throw an error and quickly fix it.
    */
    if(PRODUCTION && IP === "127.0.0.1") throw new Error(`Invalid global host ip: ${IP}`);

    /* Connecting to MongoDB */
    connect();

    /* Listening... */
    APP.listen(PORT, IP, () => console.log(`Server has been started - ${IP}:${PORT}`));
}
catch(error){
    console.error(error);
}
/* ------------------ */
