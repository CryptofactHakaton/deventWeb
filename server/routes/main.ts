// Postgres
const pg = require('../config/postgres');
const pgp = require('pg-promise')();
const db = pgp(pg);
const evnt = require('../db/events')(db);

export default (server) => {

    server.route({
        method: 'POST',
        path: '/api/event',
        config: {
            handler: (req, reply) => {
                const { payload } = req;
                evnt.create(payload).then((id) => {
                    reply(id);
                });
            },
        },
    });

    server.route({
        method: 'GET',
        path: '/api/events',
        config: {
            handler: (req, reply) => {
                evnt.all().then((events) => {
                    reply(events);
                });
            },
        },
    });

    server.route({
        method: 'GET',
        path: '/api/events/{id*}',
        config: {
            handler: (req, reply) => {
                const { id } = req.params;
                evnt.get(id).then((ev) => {
                    reply(ev);
                });
            },
        },
    });

    server.route({
        method: 'POST',
        path: '/api/event/{id}/buy',
        config: {
            handler: (req, reply) => {

                const { id } = req.params;
                // console.log(id);
                // TODO: buy ticket on event

                reply('done');
            },
        },
    });

    server.route({
        method: 'GET',
        path: '/api/event/{id}/check/{user}',
        config: {
            handler: (req, reply) => {

                const { id, user } = req.params;
                // console.log(id, user);
                // TODO: check user on event

                reply('done');
            },
        },
    });

    server.route({
        method: 'GET',
        path: '/{param*}',
        config: {
            handler: (req, reply) => {
                reply.view('index');
            },
        },
    });
};
