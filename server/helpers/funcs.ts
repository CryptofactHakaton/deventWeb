import {Server} from 'hapi';
import {inspect} from 'util';

export function catchError(error: Error) {
    console.error(inspect(error, true, 1, true));
}

export function startServer(server: Server) {
    server.start((error) => {
        if (error) {
            catchError(error);
        }

        console.log(`Sangay server running at: ${server.info.uri}`);
    });
}
