const mongoose = require('mongoose');

import { DeveloperNotification } from "../../notifications/DeveloperNotification";
import { Database } from "../Database";
import { MongoMethods } from "./MongoMethods";


const notification = new DeveloperNotification("MongoDB");

class MongoDB extends Database {
    public connect = async () => {
        try {
            await mongoose.connect(process.env.URLMONGO, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true
            });

            // Should we notify the client in case if we get a database error.
            // Maybe use websockets?

            const mongodb = mongoose.connection;

            // Bind connection to error event (to get notification of connection errors)
            mongodb.on('error', console.error.bind(console, 'MongoDB connection error:'));
        }
        catch (error) {
            notification.set({ message: `${error.message}` });
            notification.send();
        }
    }
}

// General settings for all databases
export const database = new MongoDB("Mongo");

// All methods for using the database
export const methods = new MongoMethods();