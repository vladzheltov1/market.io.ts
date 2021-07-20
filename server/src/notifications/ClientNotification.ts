/*
    CLIENT NOTIFICATIONS must NOT have any private data, or any private information.
    We must use this class in case if something happens on the server and we need
    to notify the user quickly.
*/

import { Notification } from "./Notification";

// To make this class oparete properly, we need to make a
// simple client part for getting notifications in real time.
// If we need to notify the client, we can just send the message
// and the client part will process and show it to the user.

export class ClientNotification extends Notification {
    public send() {

    }
}