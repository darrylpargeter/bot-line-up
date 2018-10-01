import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { fetchMatches } from '../actions';
import rootReducer from '../reducers';

// const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    // loggerMiddleware,
  ),
);

store.dispatch(fetchMatches('1234567'));

export default store;
