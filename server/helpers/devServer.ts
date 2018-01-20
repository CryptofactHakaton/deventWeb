import * as path from 'path';
import * as webpack from 'webpack';
import * as WebpackDevServer from 'webpack-dev-server';
import {additionalSettings} from '../config';

const config = require('../../webpack.config');
const { devPort } = additionalSettings;

export default function initDevServer() {
    const server = new WebpackDevServer(webpack(config), {
        contentBase: path.resolve(__dirname, '../../public/bundle'),
        hot: true,
        publicPath: '/assets/bundle/',
        stats: { colors: true },
    });

    server.listen(devPort, 'localhost', () => { 
        console.log('start dev server at port:', devPort);
    });
}
