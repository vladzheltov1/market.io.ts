// Setting up a local .env config
require('dotenv').config();

import { database } from './database/mongo/MongoDB';

const express = require('express');
const cookieParser = require("cookie-parser");

const APP = express();
const PORT: string = process.env.PORT;
const IP: string = process.env.IP;

APP.use(cookieParser());
APP.use(express.json());

APP.get("/", (_, res) => res.send("Server works!"));
APP.use('/api', require('./router/APIRouter'));

try {
    database.connect();
    APP.listen(PORT, IP, () => console.log(`Server has been started - ${IP}:${PORT}`));
}
catch (error) {
    console.error(error);
}