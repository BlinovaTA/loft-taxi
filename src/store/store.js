import {createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware } from 'redux';
import reducer from './reducers';
/* import middleware from './middlewares'; */
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);