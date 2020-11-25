
import configureStore from 'redux-mock-store';

const mockConfigureStore = configureStore();

const mockStore = initialState => {
    return mockConfigureStore(initialState);
}

export default mockStore;