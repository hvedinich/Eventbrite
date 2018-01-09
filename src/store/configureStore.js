import { createStore, combineReducers, applyMiddleware } from 'redux';
import event  from "../reducers/event";
import search  from "../reducers/search";

const eventbriteApp = combineReducers({
event,
search
});


function configureStore(initialState) {
    const store = createStore(eventbriteApp, initialState);
    return store
}

export default configureStore