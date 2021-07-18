/**
 * General class for integration a new database into the 
 * system. We can fill it with necessary functionality, then 
 * extend the new database class from it.
 */
export class Database {

    /**
     * Name of the database
     */
    private name = "Undefined database";

    /**
     * The constructor sets the name of the database
     * @param name Name of the database
     */
    constructor(name: string) {
        if (name.trim().length === 0) {
            throw new Error("Invalid database name given!");
        }

        this.name = name;
    }

    /**
     * Database name getter
     * @returns Name of the database
     */
    public getName() {
        return this.name;
    }

    /**
     * Any database module has to implement this method the way it is supposed to.
     * We can't describe the exact algorithm of connection, because different modules 
     * do it differently, so we let the module establish connection itself, but this 
     * method is the only place for it. 
     */
    public connect() {
        throw new Error("'Connect' method must be implemented!");
    }
}