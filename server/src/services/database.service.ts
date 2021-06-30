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
    getSchemaByTable = (tableName) => {
        return this.schemasList[tableName];
    }
}

export const databaseService = new DatabaseService();