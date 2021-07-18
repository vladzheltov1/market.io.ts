const User = require("../../models/UserSchema");
const Product = require("../../models/ProductSchema");

/**
 * A list of ALL models in database. The key is the table name
 * and the value is the model that can be used in queries.
 */
export const models = {
    users: User,
    products: Product
}