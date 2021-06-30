import { status } from "../list/httpStatus";
import { databaseService } from "../services/database.service";
const mongoose = require('mongoose');

/* 
   This module extends the default module for using
   mongodb - `mongoose`. These functions are mostly used
   in api scripts, so we need it to make the code shorter
   and get the better debugging experience.
*/

class MongoDB{

    // Connecting
    public connect = async () => {
        try{
            await mongoose.connect(
                process.env.MONGODBURL,
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useCreateIndex: true
                }
            );

            //Get the default connection
            const dbmongo = mongoose.connection;
            
            //Bind connection to error event (to get notification of connection errors)
            dbmongo.on('error', console.error.bind(console, 'MongoDB connection error:'));
        }
        catch(error){
            console.error(`Ошибка подключения к базе данных - ${error.message}`);
        }
    }

    // ------------ //
    private get = ({single, table, condition, field = {}, limit = null}): object => {
        const amount = single ? "findOne" : "find";

        return new Promise((resolve, reject) => {
            databaseService.getSchemaByTable(table)?.[amount](condition, field).limit(limit).exec((error, data) => {
                if(error) reject({status: 500});
                if(!data) reject({status: 404});
    
                resolve ({status: 200, data});
            });
        }).catch((error) => {
            // --- FOR DEBUGGING --- //
            // console.log({status: error.status, message: status[error.status]});
            return {status: error.status, message: status[error.status]};
        });
    }

    public getAll = (table: string = null, condition: object = {}, field?: object, limit?: number): object => {
        return this.get({ single: false, table, condition, field, limit }); 
    }

    public getOne = (table: string = null, condition: object = {}, field?: object): object => {
        return this.get({ single: true, table, condition, field });
    }
}

export const mongoDB = new MongoDB();