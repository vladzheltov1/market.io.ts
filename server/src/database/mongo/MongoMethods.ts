import { models } from "./MongoHelper";

export class MongoMethods {

    /**
     * Returns array of objects - data from the mongo database.
     * If nothing was found, returns the empty array.
     * @returns Array of objects
     */

    public async get({ table = null, where = {}, limit = null }) {

        // TODO:
        // 1) Add the functionality to set the return limit
        // 2) Find a way to add the fields to return (SELECT _id, name ...)

        if (!models[table]) {
            throw new Error(`No table with name ${table} found!`);
        }

        return await models[table]?.find(
            where /* condition (ex. WHERE id = 5) */,
        ).exec();
    }
}