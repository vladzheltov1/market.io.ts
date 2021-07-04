import { databaseService } from "../services/database.service";

const mongoose = require('mongoose');
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
    public getAll = (table: string = null, condition: object = {}, field?: object, limit?: number): object => {
        return databaseService.get({ single: false, table, condition, field, limit }); 
    }

    public getOne = (table: string = null, condition: object = {}, field?: object): object => {
        return databaseService.get({ single: true, table, condition, field });
    }
}

export const mongoDB = new MongoDB();