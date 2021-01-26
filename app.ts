import * as express from 'express';
import * as http from 'http';
import * as socketio from "socket.io";

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const io = new socketio.Server(server);

export {
    app,
    io,
    server
}