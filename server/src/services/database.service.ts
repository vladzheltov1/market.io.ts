import { status } from "../list/httpStatus";
/* Getting database schemas */
const User = require("../models/User.schema");
const Product = require('../models/Product.schema');

class DatabaseService
{
    private schemasList = {
        users: User,
        products: Product
    }

    /**
     * Return database schema
     */
    public getSchemaByTable = (tableName) => {
        return this.schemasList[tableName];
    }



    public get = ({single, table, condition, field = {}, limit = null}): object => {
        const amount = single ? "findOne" : "find";

        return new Promise((resolve, reject) => {
            this.getSchemaByTable(table)?.[amount](condition, field).limit(limit).exec((error, data) => {
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
}

export const databaseService = new DatabaseService();