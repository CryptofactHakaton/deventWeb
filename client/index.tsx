import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app';

const render = (App) => {
    ReactDOM.render(
        <AppContainer>
            <App />
        </AppContainer>,
        document.getElementById('application')
    );
}

render(App);

interface RequireImport {
    default: any;
}

if (module.hot) {
    module.hot.accept('./app', () => {
        console.log('doing a app hot accept')
        const NextApp = require<RequireImport>('./app').default
        render(NextApp);
    });
}
