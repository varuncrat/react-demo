import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import {createBrowserHistory} from 'history';
import rootReducer from '../reducers';

export const history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk, routerMiddleware(history)];

const configureStore = (initialState = {}) => {
  const store = createStore(
    rootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(...middleware)),
  );
  return store;
}

export default configureStore();