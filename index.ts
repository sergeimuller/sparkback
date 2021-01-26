import * as bodyparser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as expressWinston from 'express-winston';
import * as helmet from 'helmet';
import * as socketio from "socket.io";
import * as winston from 'winston';
import debug from 'debug';

import { app, io, server } from './app';
import { CommonRoutesConfig } from './common/common.routes.config';
import { getRoutes } from './routes';

const debugLog: debug.IDebugger = debug('app');
const port: Number = 3000;
const routes = getRoutes(app);

app.use(bodyparser.json());
app.use(cors());
app.use(helmet());

app.use(expressWinston.logger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    )
}));


app.use(expressWinston.errorLogger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    )
}));

io.on('connection', (socket: socketio.Socket) => {
    socket.on('testEvent', (data) => {

    });
});

app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(`Server up and running!`)
});

server.listen(port, () => {
    debugLog(`Server running at http://localhost:${port}`);
    routes.forEach((route: CommonRoutesConfig) => {
        debugLog(`Routes configured for ${route.getName()}`);
    });
});