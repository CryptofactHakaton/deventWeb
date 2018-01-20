import {Server} from 'hapi';

import staticRoute from './bundle';
import mainRoute from './main';

export default (server: Server) => {
    staticRoute(server);
    mainRoute(server);
};
