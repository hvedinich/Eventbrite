import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import event from '../reducers/event';
import search from '../reducers/search';


const eventbriteApp = combineReducers({
  event,
  search,
});


function configureStore() {
  const store = createStore(eventbriteApp, composeWithDevTools(applyMiddleware(thunk)));
  return store
}

export default configureStore
