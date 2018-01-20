import Store from './store';

class StoreFactory {
    static store;

    static getStore() {
        if (!this.store) {
            this.store = new Store();
        }

        return this.store.get();
    }
}

export default StoreFactory.getStore();
