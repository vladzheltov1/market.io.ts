/**
 * This type describes the types of the arguments that the setter can take. 
 */
type SetterData = {
    status: number,
    message: string,
    sender: string
}

/**
 * An abstract class, that describes the default behaviour of the notification.
 * It serves to send notifications to different parts of the project.
 */
export abstract class Notification {
    protected sender = "Server";
    protected status = 500;
    protected message = null;

    public set({
        sender = this.sender,
        message = this.message,
        status = this.status,
    }: SetterData) {
        this.sender = sender;
        this.status = status;
        this.message = message;
    }

    // As this class is an abstract layer for all kinds of notifications,
    // we can't write anything here, because the target is always different.
    public abstract send();
}