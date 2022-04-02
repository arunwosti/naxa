import {applyMiddleware, combineReducers, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from './sagas/root.saga';
import serviceReducer from './services/service.reducer.js';

const rootReducer = combineReducers({
    serviceStore: serviceReducer
});


const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store;