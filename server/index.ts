import * as h2o2 from 'h2o2';
import {Server} from 'hapi';
import * as inert from 'inert';
import * as vision from 'vision';

import config from './config';
import {catchError, startServer} from './helpers/funcs';
import addTemplateEngine from './helpers/templates';
import addRoutesToServer from './routes';

export default function initServer() {
    const server = new Server();

    server.connection(config);
    server.register([
        inert,
        vision,
        h2o2,
    ], (err: Error) => {
        if (err) {
            catchError(err);
        }

        addRoutesToServer(server);
        addTemplateEngine(server);

        startServer(server);
    });
}
