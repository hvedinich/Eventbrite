import { createStore, combineReducers, applyMiddleware } from 'redux';

// const eventbriteApp = combineReducers({

// });

function reducer (store = ["1", "2", "3", "4", "5"]){
    return store
}

function configureStore(initialState) {
    const store = createStore(reducer, initialState);
    return store
}

export default configureStore