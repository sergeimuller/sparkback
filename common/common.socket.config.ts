import * as socketio from "socket.io";

export abstract class CommonSocketConfig {
    socket: socketio.Socket;
    id: string;

    constructor(socket: socketio.Socket) {
        this.socket = socket;
        this.id = socket.id;
        this.configureEvents();
    }

    getID() {
        return this.id;
    }

    abstract configureEvents(): socketio.Socket
}