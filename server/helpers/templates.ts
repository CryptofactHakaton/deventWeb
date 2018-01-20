import * as path from 'path';
import * as Nunjucks from 'nunjucks';

export default (server) => {
    server.views({
        engines: {
            html: {
                compile(src, options) {
                    const template = Nunjucks.compile(src, options.environment);

                    return context => template.render(context);
                },

                prepare(options, next) {
                    options.compileOptions.environment = Nunjucks.configure(options.path, { watch: false });
                    return next();
                },
            },
        },
        path: path.join(__dirname, '../templates'),
    });
}
