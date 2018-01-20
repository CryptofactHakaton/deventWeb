import * as React from 'react';
import { Provider } from 'react-redux';
import { LocaleProvider } from 'antd';
const antdLocale = require('antd/lib/locale-provider/ru_RU');

import AppContainer from '../routes';
import store from '../store';

const App = (Component) => {
    return class Application extends React.Component<any, any> {
        render() {
            return (
                <Provider store={store}>
                    <LocaleProvider locale={antdLocale}>
                        <Component />
                    </LocaleProvider>
                </Provider>
            );
        }
    };
};

export default App(AppContainer);
