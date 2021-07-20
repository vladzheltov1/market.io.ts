import { models, tableExists } from "./MongoHelper";

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

        if (!tableExists(table)) {
            throw new Error(`No table with name ${table} found!`);
        }

        return await models[table].find(
            where /* (eg. {_id: 5} -> WHERE id = 5) */,
        ).exec();
    }

    // Test it!
    public async delete({ table = null, id = {} }) {
        if (!tableExists(table)) {
            throw new Error(`No table with name ${table} found!`);
        }

        try {
            await models[table].deleteOne({ _id: id });
        } catch (error) {
            return { ok: false };
        }

        return { ok: true };
    }
}