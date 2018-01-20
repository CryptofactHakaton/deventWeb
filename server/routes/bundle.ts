import {inspect} from 'util';
import * as pather from 'path';

import env from '../env';
import {additionalSettings} from '../config';

export default (server) => {

    const { isDev } = env();
    const { devPort } = additionalSettings;

    if (isDev) {
        server.route({
            method: 'GET',
            path: '/assets/bundle/{param*}',
            handler: {
                proxy: {
                    mapUri: (request, callback) => {
                        const { path } = request;

                        callback(null, `http://localhost:${devPort}${path}`);
                    },
                },
            },
        });
    } else {
        server.route({
            method: 'GET',
            path: '/assets/bundle/{param*}',
            handler: {
                directory: {
                    path: pather.resolve(__dirname, '../../public/bundle'),
                    listing: true,
                },
            },
        });
    }

    server.route({
        method: 'GET',
        path: '/assets/static/{param*}',
        handler: {
            directory: {
                path: pather.resolve(__dirname, '../../public/static'),
                listing: true,
            },
        },
    });

    server.route({
        method: 'GET',
        path: '/assets/images/{param*}',
        handler: {
            directory: {
                path: pather.resolve(__dirname, '../../public/images'),
                listing: true,
            },
        },
    });
};
