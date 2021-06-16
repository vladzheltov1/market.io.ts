import { getSchemaByTable } from "../helper/schema";

// This module extends the default module for using
// mongodb - `mongoose`. These functions are mostly used
// in api scripts, so we need it to make the code shorter
// and get the better debugging experience.

class MongoDB{
    public getAll = (table: string, condition: object = {}, callback: Function) => {

        getSchemaByTable(table)?.find(condition).exec((error, results) => {
            if(error) return callback({status: 400, error});
            if(!results) return callback({status: 200, results: {}});

            return callback({status: 200, results});
        });
    }
    public getOne = (table: string, condition: object = {}, callback: Function) => {
        getSchemaByTable(table).findOne(condition).exec((error, result) => {
            if(error) return callback({status: 400, error});
            if(!result) return callback({status: 200, result: {}});

            return callback({status: 200, result});
        });
    }
}

/* ------------ Export ------------ */
export const mongoDB = new MongoDB();
/* -------------------------------- */