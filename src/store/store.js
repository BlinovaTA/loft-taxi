import {createStore} from 'redux';
import reducer from './reducers';
import middleware from './middlewares';

export const store = createStore(reducer, middleware);