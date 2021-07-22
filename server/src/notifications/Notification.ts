/**
 * This type describes the types of the arguments that the setter can take. 
 */
type SetterData = {
    status?: number,
    message?: string
}

/**
 * An abstract class, that describes the default behaviour of the notification.
 * It serves to send notifications to different parts of the project.
 */
export abstract class Notification {
    protected sender = "Server";
    protected status = 500;
    protected message = null;

    constructor(sender?: string) {
        this.sender = sender || this.sender;
    }

    /**
     * Set the data of notification.
     * Default message - `null`, default status - `500`,
     * default sender name - `Server`
     */
    public set({ message, status }: SetterData) {
        this.message = message || this.message;
        this.status = status || this.status;
    }

    // As this class is an abstract layer for all kinds of notifications,
    // we can't write anything here, because the target is always different.
    public abstract send();
}