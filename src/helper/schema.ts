/* Getting database schemas */
const User = require("../models/User.schema");
const Product = require('../models/Product.schema');

const schemasList = {
    users: User,
    products: Product
}

// Converting table name into the schema name
export const getSchemaByTable = (tableName) => {
    return schemasList[tableName];
}