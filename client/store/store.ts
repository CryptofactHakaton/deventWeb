import { applyMiddleware, compose, createStore, Store as ReduxStore } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer';
import { api } from '../api';

interface IWindow {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
}

declare const window: IWindow;

const serviceContainer = { api };

class Store {
    private store;
    private initialStore = {};
    private middleware = [thunk.withExtraArgument(serviceContainer)];

    constructor() {
        this.createStore();
    }

    get() {
        return this.store;
    }

    private createStore() {
        const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

        this.store = createStore(
            reducer,
            this.initialStore,
            composeEnhancers(
                applyMiddleware(...this.middleware),
            ),
        );
    }
}

export default Store;
