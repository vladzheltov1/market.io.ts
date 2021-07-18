const mongoose = require('mongoose');

import { Database } from "../Database";
import { MongoMethods } from "./MongoMethods";

class MongoDB extends Database {
    public connect = async () => {
        try {
            await mongoose.connect(process.env.URLMONGO, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true
            });

            // We need to notify the client in case if we get a database error.
            // Maybe use websockets?

            const mongodb = mongoose.connection;

            // Bind connection to error event (to get notification of connection errors)
            mongodb.on('error', console.error.bind(console, 'MongoDB connection error:'));
        }
        catch (error) {
            console.error(`Ошибка подключения к базе данных - ${error.message}`);
        }
    }
}

export const methods = new MongoMethods();
export const database = new MongoDB("Mongo");