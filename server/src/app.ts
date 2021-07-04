require('dotenv').config();

import { mongoDB } from './database/mongoDB';

const express      = require('express');
const cookieParser = require("cookie-parser");

const APP          = express();
const PORT: string = process.env.PORT;
const IP: string   = process.env.IP;

APP.use(cookieParser());
APP.use(express.json());
APP.use('/api', require("./router/api.router"));

try{
    mongoDB.connect();

    APP.listen(PORT, IP, () => console.log(`Server has been started - ${IP}:${PORT}`));
}
catch(error){ console.error(error) }