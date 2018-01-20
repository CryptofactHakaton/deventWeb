export default (server) => {
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
