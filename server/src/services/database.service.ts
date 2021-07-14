import { status } from "../errors/lists/httpStatus";

const User = require("../models/User.schema");
const Product = require('../models/Product.schema');

class DatabaseService {
    /**
     * List of all available schemas in the database
     */
    private schemasList = {
        users: User,
        products: Product
    }

    /**
     * Return database schema by table name
     */
    public getSchemaByTable = (tableName) => {
        return this.schemasList[tableName];
    }


    /**
     * Universal function for getting data from database
     */
    public get = ({ single = true, table, condition, field = {}, limit = null }): object => {
        const amount = single ? "findOne" : "find";

        return new Promise((resolve, reject) => {
            this.getSchemaByTable(table)?.[amount](condition, field).limit(limit).exec((error, data) => {
                if (error) reject({ status: 500 });
                if (!data) reject({ status: 404 });

                resolve({ status: 200, data });
            });
        }).catch((error) => {
            // --- FOR DEBUGGING --- //
            // console.log({status: error.status, message: status[error.status]});
            return { status: error.status, message: status[error.status] };
        });
    }
}

export const databaseService = new DatabaseService();