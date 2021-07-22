import { Notification } from "./Notification";

// Create in debugging purposes :)

export class DeveloperNotification extends Notification {
    public async send() {
        // We don't need a reject method, because this promise will never fail :)
        return new Promise((resolve) => {

            // TODO: Change the color theme.

            console.log('\x1b[36m%s\x1b[1m', "-----------------------------------");
            console.log('\x1b[32m%s\x1b[0m', ` NEW MESSAGE BY "${this.sender}":`);
            console.log('\x1b[31m%s\x1b[0m', ` : status - ${this.status}`);
            console.log('\x1b[37m%s\x1b[0m', ` : message - ${this.message}`);
            console.log('\x1b[36m%s\x1b[0m', "-----------------------------------");

            resolve({ ok: true });
        });
    }
}